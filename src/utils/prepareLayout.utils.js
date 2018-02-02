import { filter } from 'lodash';

export const prepareConsultation = (consultations, filtering) =>
  filter(consultations, consultation => {
    const { month, year } = consultation;

    if (month === filtering.month && year === filtering.year) {
      return consultation;
    }

    return null;
  });

export const prepareCharge = (charges, filtering) =>
  filter(charges, charge => {
    const { month, year } = charge;

    if (month === filtering.month && year === filtering.year) {
      return charge;
    }

    return null;
  });
