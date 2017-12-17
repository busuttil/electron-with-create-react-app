import Normalizer from '../normaliser';

const rowsNormalizer = new Normalizer('rowIds', 'rowsById');

const initialState = {
  rowsById: {},
  rowIds: [],
  currentRow: {},
};

// https://github.com/localForage/localForage
export function consultation(state = initialState, action) {
  switch (action.type) {
      case 'LOAD_ROW':
      return {
        rowsById: {},
        rowIds: [],
        ...action.state.consultation,
        currentRow: {},
      };
    case 'ADD_LINE':
      return {
        ...rowsNormalizer.append(state, [action.row]),
          currentRow: {},

      }
      case 'REMOVE_LINE':
      return {
        ...rowsNormalizer.remove(state, action.id),
          currentRow: {},
      }
    case 'EDIT_LINE':
      return {
        ...state,
        currentRow: action.currentRow
      }
    case 'SAVE_LINE':
      return {
        ...state,
        rowsById: {
          [action.currentRow.id]: action.currentRow,
        },
        currentRow: {},
      }
    default:
      return state;
  }
};
