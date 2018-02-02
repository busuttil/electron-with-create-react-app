import { connect } from 'react-redux';

import Search from './search.component';
import { searchPatient } from '../../redux/search/search.actions';

const mapStateToProps = state => ({
  search: state.search,
});

export default connect(mapStateToProps, {
  searchPatientAction: searchPatient,
})(Search);
