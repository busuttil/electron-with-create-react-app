export const LOAD_CHARGES = 'LOAD_CHARGES';
export const loadCharges = charges => ({
  type: LOAD_CHARGES,
  charges,
});

export const LOAD_CHARGES_FIREBASE = 'LOAD_CHARGES_FIREBASE';
export const loadChargesFirebase = charges => ({
  type: LOAD_CHARGES_FIREBASE,
  charges,
});

export const CREATE_CHARGE = 'CREATE_CHARGE';
export const createCharge = charge => ({
  type: CREATE_CHARGE,
  charge,
});

export const UPDATE_CHARGE = 'UPDATE_CHARGE';
export const updateCharge = charge => ({
  type: UPDATE_CHARGE,
  charge,
});

export const DELETE_CHARGE = 'DELETE_CHARGE';
export const deleteCharge = id => ({
  type: DELETE_CHARGE,
  id,
});
