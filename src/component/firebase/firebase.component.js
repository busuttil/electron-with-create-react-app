import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/lib/Modal';
import fire from '../../firebase.config';
import cloud from '../../icons/cloud.svg';
import './list-firebase.css';

class Firebase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  openModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  save = () => {
    const { consultations, charges } = this.props;
    const datas = { consultations, charges };
    fire
      .database()
      .ref('data')
      .remove();
    fire
      .database()
      .ref('data')
      .push(datas);

    this.toggleModal();
  };

  load = () => {
    const { loadConsultationsFirebaseAction, loadChargesFirebaseAction } = this.props;
    const messagesRef = fire.database().ref('data');
    messagesRef.on('child_added', snapshot => {
      const message = { datas: snapshot.val(), id: snapshot.key };
      const consultations = { ...message.datas.consultations };
      const charges = { ...message.datas.charges };
      loadConsultationsFirebaseAction(consultations);
      loadChargesFirebaseAction(charges);
      this.toggleModal();
    });
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <div>
        <button onClick={this.openModal}>
          <img className="icons" src={cloud} alt="cloud" />
        </button>
        <Modal show={modalOpen} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Mise à jours des données</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalOpen && (
              <div className="list-firebase">
                <button onClick={this.save}>Sauvegarder la base de donnée</button>
                <button onClick={this.load}>Charger la base de donnée</button>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Firebase.propTypes = {
  // eslint-disable-next-line
  charges: PropTypes.object.isRequired,
  consultations: PropTypes.object.isRequired,
  loadChargesFirebaseAction: PropTypes.func.isRequired,
  loadConsultationsFirebaseAction: PropTypes.func.isRequired,
};

export default Firebase;
