import { connect } from 'react-redux';

import { loadConsultationsFirebase } from '../../redux/consultation/consultation.actions';
import { loadChargesFirebase } from '../../redux/charge/charge.actions';

import Firebase from './firebase.component';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  charges: state.charges.charges,
});

export default connect(mapStateToProps, {
  loadConsultationsFirebaseAction: loadConsultationsFirebase,
  loadChargesFirebaseAction: loadChargesFirebase,
})(Firebase);
