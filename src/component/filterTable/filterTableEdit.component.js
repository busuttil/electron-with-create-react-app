import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class FilterTable extends Component {
  constructor(props) {
    super(props);

    const { filtering } = this.props;

    this.state = { filtering };
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    const { filtering } = this.state;

    filtering[name] = value;

    this.setState({ filtering });
  };

  handleSubmit = () => {
    const { createFilterTableAction, toggleModal } = this.props;
    const { filtering } = this.state;

    createFilterTableAction(filtering);
    toggleModal();
  };

  render() {
    const { filtering } = this.props;

    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Filter: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Mois:</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                name="month"
                key={filtering.month}
                onChange={this.handleInputChange}
                value={filtering.month}
              >
                <option value="01">Janvier</option>
                <option value="02">Février</option>
                <option value="03">Mars</option>
                <option value="04">Avril</option>
                <option value="05">Mai</option>
                <option value="06">Juin</option>
                <option value="07">Juillet</option>
                <option value="08">Août</option>
                <option value="09">Septembre</option>
                <option value="10">Octobre</option>
                <option value="11">Novembre</option>
                <option value="12">Décembre</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formBasicText">
              <ControlLabel>Année :</ControlLabel>
              <FormControl type="number" name="year" value={filtering.year} onChange={this.handleInputChange} />
            </FormGroup>
            <button onClick={this.handleSubmit}>Filtrer</button>
          </form>
        </Modal.Body>
      </div>
    );
  }
}

FilterTable.defaultProps = {
  filtering: {
    year: moment().format('YYYY'),
    month: moment().format('MM'),
  },
};

FilterTable.propTypes = {
  // eslint-disable-next-line
  filtering: PropTypes.object,
  createFilterTableAction: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default FilterTable;
