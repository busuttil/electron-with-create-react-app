import { firebase } from 'react-redux-firebase';
import firebaseConfig from '../../config';

import { SAVE_FIREBASE } from '../firebase/firebase.actions';
// LOAD_FIREBASE
firebase.initializeApp(firebaseConfig);

export default store => next => action => {
  switch (action.type) {
    case SAVE_FIREBASE: {
      next(action);

      const { getState } = store;

      console.log('###', getState());

      firebase.push('datas', getState());
      break;
    }

    default:
      next(action);

      break;
  }
};
