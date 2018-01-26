import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { split } from 'lodash';
import moment from 'moment';

import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

const emptyCharge = {
  date: moment().format('YYYY-MM-DD'),
  name: '',
  price: '0',
};

class ChargeEdit extends Component {
  constructor(props) {
    super(props);
    let { charge } = this.props;

    if (!charge.id) {
      charge = {
        date: moment().format('YYYY-MM-DD'),
        name: '',
        price: '0',
      };
    }

    this.state = { charge };
  }

  componentWillReceiveProps(nextProps) {
    const charge = nextProps.charge.id ? nextProps.charge : { ...emptyCharge };

    this.setState({ charge });
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    const { charge } = this.state;

    charge[name] = value;

    this.setState({ charge });
  };

  handleSubmit = () => {
    const { createChargeAction, updateChargeAction, toggleModal } = this.props;
    const { charge } = this.state;

    const currentDate = split(charge.date, '-', 3);
    const currentMonth = currentDate[1];
    const currentYear = currentDate[0];

    if (charge.id) {
      updateChargeAction(charge);
      toggleModal();

      return;
    }

    createChargeAction({ ...charge, month: currentMonth, year: currentYear });
    toggleModal();
  };

  render() {
    const { charge } = this.state;
    const { open, toggleModal } = this.props;

    return (
      <Modal show={open} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Charge: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Date</ControlLabel>
              <FormControl type="date" name="date" value={charge.date} onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup controlId="formChargesName">
              <ControlLabel>Charges</ControlLabel>
              <FormControl type="text" name="name" value={charge.name} onChange={this.handleInputChange} />
            </FormGroup>
            <FormGroup controlId="formChargesPrice">
              <ControlLabel>Prix</ControlLabel>
              <FormControl type="number" min="0" name="price" value={charge.price} onChange={this.handleInputChange} />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Valider</Button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

ChargeEdit.defaultProps = {
  charge: {},
};

ChargeEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  createChargeAction: PropTypes.func.isRequired,
  updateChargeAction: PropTypes.func.isRequired,
  charge: PropTypes.object,
};

export default ChargeEdit;
