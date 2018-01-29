import { connect } from 'react-redux';

import { createFirebaseData } from '../../redux/firebase/firebase.actions';
import Firebase from './firebase.component';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  filtering: state.filtering,
  charges: state.charges.charges,
});

export default connect(mapStateToProps, {
  createFirebaseDataAction: createFirebaseData,
})(Firebase);
