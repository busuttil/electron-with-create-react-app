import { connect } from 'react-redux';
import GeneratePdf from './generatePdf.component';

const mapStateToProps = state => ({
  consultations: state.consultation.consultations,
  filtering: state.filtering,
  charges: state.charges.charges,
});

export default connect(mapStateToProps)(GeneratePdf);
