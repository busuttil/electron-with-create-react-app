import _ from 'lodash';

const initialState = {
  currentRow: {},
  rows: [],
};

// https://github.com/localForage/localForage
export function consultation(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_ROW':
      return {
        ...state,
        rows: [...state.rows, ...action.rows]
      }
    case 'ADD_LINE':
      return {
        ...state,
        rows: [...state.rows, action.row]
      }
    case 'EDIT_LINE':
      return {
        ...state,
        currentRow: action.currentRow
      }
    case 'SAVE_LINE':
      const { currentRow } = action;
       // remove original row
      const rows = state.rows.filter(row => row.id !== currentRow.id);
      // add updated row
      rows.push(currentRow);
      return {
         ...state,
         currentRow: {},
         rows
      };
    case 'REMOVE_LINE':
      return {
        ...state,
        rows: state.rows.filter(row => row.id !== action.id)
      }
    default:
      return state;
  }
};
