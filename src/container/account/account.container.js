import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _, { filter } from 'lodash';
import AccountComponent from './account.component';

import { sum } from '../../redux/consultation/consultation.reducers';
import { prepareConsultation, prepareCharge } from '../../utils/prepareLayout.utils';
import { getRevenue, getExpenses, precisionRound } from '../../utils/algorithm.utils';

export const brut = consultations => {
  // bénéfice global
  const getBenefit = _.map(consultations, 'payment');

  return getBenefit.reduce(sum, 0);
};

class AccountContainer extends Component {
  componentDidMount() {
    this.props.loadConsultationsAction();
    this.props.loadChargesAction();
    this.props.loadFilterTableAction();
  }

  render() {
    const { filtering, search } = this.props;
    let consultations;

    consultations = prepareConsultation(this.props.consultations, filtering, search);
    const getSearch = search.name;

    if (getSearch && getSearch.length >= 3) {
      consultations = filter(this.props.consultations, consultation => consultation.name.includes(getSearch));
    }

    const revenue = getRevenue(consultations);

    const charges = prepareCharge(this.props.charges, this.props.filtering);
    const expenses = getExpenses(charges);

    const calculateProfit = revenue - expenses;
    const profit = precisionRound(calculateProfit, 2);

    return (
      <AccountComponent
        revenue={revenue}
        expenses={expenses}
        profit={profit}
        consultations={consultations}
        charges={charges}
        brut={brut(consultations)}
      />
    );
  }
}

AccountContainer.propTypes = {
  consultations: PropTypes.object.isRequired,
  charges: PropTypes.object.isRequired,
  filtering: PropTypes.object.isRequired,
  search: PropTypes.object,
  loadConsultationsAction: PropTypes.func.isRequired,
  loadChargesAction: PropTypes.func.isRequired,
  loadFilterTableAction: PropTypes.func.isRequired,
  brut: PropTypes.number.isRequired
};

export default AccountContainer;
