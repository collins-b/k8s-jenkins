import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import newsSourceReducer from './newsSourceReducer'

 const rootReducer = combineReducers({
   news: newsReducer,
   sources: newsSourceReducer
 });

export default rootReducer;
