import { SEARCH_PATIENT } from './search.actions';

const initialState = {
  search: {
    name: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PATIENT: {
      const { name } = action;

      if (!name) {
        return state;
      }

      return {
        ...state,
        ...name,
      };
    }

    default:
      return state;
  }
};
