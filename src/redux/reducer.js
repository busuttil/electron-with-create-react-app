import { combineReducers } from 'redux';

import consultation from './consultation/consultation.reducers';
import charges from './charge/charge.reducers';
import filtering from './filtering/filtering.reducers';
import search from './search/search.reducers';

export default combineReducers({ consultation, charges, filtering, search });
