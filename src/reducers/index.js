import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import newsSourceReducer from './newsSourceReducer';
import techReducer from './techReducer';
import politicsReducer from './politicsReducer';

 const rootReducer = combineReducers({
   news: newsReducer,
   sources: newsSourceReducer,
   tech: techReducer,
   politics: politicsReducer
 });

export default rootReducer;
