import {
	FETCH_NEWS
} from '../actions/News';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_NEWS:
	   return action.payload.data;
	default:
	   return state;
	}
}