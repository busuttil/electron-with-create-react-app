import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB__6jacj_HLNPFAD0AzPp2T0f31Zsil_Q',
  authDomain: 'morgane-comptability.firebaseapp.com',
  databaseURL: 'https://morgane-comptability.firebaseio.com/',
  projectId: 'morgane-comptability',
  storageBucket: 'morgane-comptability.appspot.com',
};

firebase.initializeApp(firebaseConfig);

class Firebase extends Component {
  componentWillMount() {
    this.firebaseRef = firebase.database().ref('data/datas');
    this.firebaseRef.limitToLast(25).on('value', dataSnapshot => {
      const items = [];
      dataSnapshot.forEach(childSnapshot => {
        const item = childSnapshot.val();
        item['.key'] = childSnapshot.key;
        items.push(item);
      });

      this.setState({
        items,
      });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { createFirebaseDataAction, consultations, filtering, charges } = this.props;
    const datas = { consultations, filtering, charges };

    this.firebaseRef.push(datas);
  };
  /*saveData = () => {
    const { createFirebaseDataAction, consultations, filtering, charges } = this.props;
    const datas = { consultations, filtering, charges };

    // createFirebaseDataAction(datas);
    firebase.push('datas', datas);
  };*/

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Sauvegarder</button>
      </div>
    );
  }
}

Firebase.propTypes = {
  createFirebaseDataAction: PropTypes.func.isRequired,
  // eslint-disable-next-line
  filtering: PropTypes.object.isRequired,
  charges: PropTypes.object.isRequired,
  consultations: PropTypes.object.isRequired,
};

export default Firebase;
