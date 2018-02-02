import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash';
import AccountComponent from './account.component';

import { prepareConsultation, prepareCharge } from '../../utils/prepareLayout.utils';
import { getRevenue, getExpenses, precisionRound } from '../../utils/algorithm.utils';

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
      consultations = filter(consultations, consultation => consultation.name.includes(getSearch));
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
};

export default AccountContainer;
