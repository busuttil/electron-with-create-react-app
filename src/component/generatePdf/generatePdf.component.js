import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { filter, parseInt, values, map, dropRight, drop } from 'lodash';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const headers = ['Date', 'Patient', 'Consulation', 'Moyen de paiement', 'Règlement'];

class GeneratePdf extends Component {
  getConsultation() {
    const { consultations, filtering } = this.props;

    return filter(consultations, consultation => {
      const { month, year } = consultation;

      if (month === parseInt(filtering.month) && year === parseInt(filtering.year)) {
        return consultation;
      }

      return null;
    });
  }

  getPdf = () => {
    const doc = new jsPDF('p', 'pt');
    const testValues = map(this.getConsultation(), consultation => {
      const arrayConsultation = values(consultation);
      const dropIndex = drop(arrayConsultation);

      return dropRight(dropIndex, 2);
    });

    doc.autoTable(headers, testValues);
    doc.save('table.pdf');
  };

  render() {
    const test = this.getConsultation();
    // const generateDate = map(this.getConsultation(), 'date');

    return (
      <div>
        <button onClick={this.getPdf}>test</button>
      </div>
    );
  }
}

GeneratePdf.propTypes = {
  consultations: PropTypes.object.isRequired,
  filtering: PropTypes.object.isRequired,
};

export default GeneratePdf;
