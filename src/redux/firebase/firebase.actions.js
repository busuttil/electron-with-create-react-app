export const LOAD_FIREBASE = 'LOAD_FIREBASE';
export const loadFirebaseData = datas => ({
  type: LOAD_FIREBASE,
  datas,
});

export const SAVE_FIREBASE = 'SAVE_FIREBASE';
export const createFirebaseData = datas => ({
  type: SAVE_FIREBASE,
  datas,
});
