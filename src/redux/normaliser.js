import _ from 'lodash';
import set from 'immutable-set';

/**
 * Normalizer util
 */
export default class Normalizer {
    constructor(stateIdListIndex, stateEntityListIndex, key = 'id') {
        this.stateIdListIndex = stateIdListIndex;
        this.stateEntityListIndex = stateEntityListIndex;
        this.key = key;
        this.checkElementUpdate = () => false;
    }

    _getExistingIdList(state, path = []) {
        return _.get(state, [this.stateIdListIndex, ...path], []);
    }

    _main(state, elements = [], nestedContext, append) {
        if (!elements.length) {
            return state;
        }

        let path = nestedContext;

        // Ensure path is an array to be use with set
        if (typeof path === 'string' || typeof path === 'number') {
            path = [nestedContext];
        }

        let idList = append ? [...this._getExistingIdList(state, path)] : [];
        let entities = {};

        elements.forEach(element => {
            const id = element[this.key];

            // Store only new ids of the received elements
            idList.push(id);

            if (!state[this.stateEntityListIndex][id]) {
                // Store only new elements
                entities[id] = element;
            } else if (this.checkElementUpdate(state[this.stateEntityListIndex][id], element)) {
                entities[id] = element;
            }
        });

        if (append) {
            idList = _.uniq(idList);
        }

        const noNewEntities = _.isEmpty(entities);

        // If IDs didn't change then nothing could have changed
        if (noNewEntities && _.isEqual(this._getExistingIdList(state, path), idList)) {
            return state;
        }

        if (path) {
            // Add the id list to its nested position when there is a nested context
            idList = set(state[this.stateIdListIndex], path, idList);
        }

        entities = noNewEntities
            ? state[this.stateEntityListIndex]
            : {
                ...state[this.stateEntityListIndex],
                ...entities,
            };

        return {
            ...state,
            [this.stateIdListIndex]: idList,
            [this.stateEntityListIndex]: entities,
        };
    }

    shouldElementBeUpdated(checkFn) {
        this.checkElementUpdate = checkFn;

        return this;
    }

    /**
     * Add element to the state.
     * Elements that were already known are not modified.
     * SET the id list to ids of given elements
     * This method is immutable.
     * @param state State
     * @param elements Array of element to add
     * @param nestedContext Nested context to store the id list index
     * @returns {*} The new version of the state if it needed to be modified, the same state otherwise.
     */
    set(state, elements = [], nestedContext) {
        return this._main(state, elements, nestedContext, false);
    }

    /**
     * Add element to the state.
     * Elements that were already known are not modified.
     * Append (NOT DEDUPLICATE) the id list to ids of given elements
     * This method is immutable.
     * @param state State
     * @param elements Array of element to add
     * @param nestedContext Nested context to store the id list index
     * @returns {*} The new version of the state if it needed to be modified, the same state otherwise.
     */
    append(state, elements = [], nestedContext) {
        return this._main(state, elements, nestedContext, true);
    }

    remove(state, id) {
        let {[this.stateEntityListIndex]: { [id]: {}, ...others},} = state;
        return {
            [this.stateEntityListIndex]: others,
            [this.stateIdListIndex]: state[this.stateIdListIndex].filter(it => it !== id)
        }
    }
}
