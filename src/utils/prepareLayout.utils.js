import { filter, parseInt } from 'lodash';

export const prepareConsultation = (consultations, filtering) =>
  filter(consultations, consultation => {
    const { month, year } = consultation;

    if (month === parseInt(filtering.month) && year === parseInt(filtering.year)) {
      return consultation;
    }

    return null;
  });

export const prepareCharge = (charges, filtering) =>
  filter(charges, charge => {
    const { month, year } = charge;

    if (month === parseInt(filtering.month) && year === parseInt(filtering.year)) {
      return charge;
    }

    return null;
  });
