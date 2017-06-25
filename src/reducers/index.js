import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import newsSourceReducer from './newsSourceReducer';
import techReducer from './techReducer';

 const rootReducer = combineReducers({
   news: newsReducer,
   sources: newsSourceReducer,
   tech: techReducer
 });

export default rootReducer;
