import {
	FETCH_POLITICS
} from '../actions/Politics';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_POLITICS:
	   return action.payload.data.sources;
	default:
	   return state;
	}
}