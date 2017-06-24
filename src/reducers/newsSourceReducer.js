import {
	FETCH_SOURCES
} from '../actions/Sources';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_SOURCES:
	   return action.payload.data;
	default:
	   return state;
	}
}