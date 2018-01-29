import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Firebase extends Component {
  saveData = () => {
    const { createFirebaseDataAction, consultations, filtering, charges } = this.props;
    const datas = { consultations, filtering, charges };

    createFirebaseDataAction(datas);
  };

  render() {
    return (
      <div>
        <button onClick={this.saveData}>Sauvegarder</button>
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
