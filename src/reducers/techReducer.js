import {
	FETCH_TECH
} from '../actions/Technology';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_TECH:
	   return action.payload.data.sources;
	default:
	   return state;
	}
}