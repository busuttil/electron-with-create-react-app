import React, { Component } from 'react';

class CellHead extends Component {
  addNewLine = () =>  {
    this.props.addLineAction();
  }

  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Libellé</th>
          <th>Moyen de paiement</th>
          <th>Règlement</th>
          <th><a href='#' onClick={this.addNewLine}>+</a></th>
        </tr>
      </thead>
    );
  }
};

export default CellHead;
