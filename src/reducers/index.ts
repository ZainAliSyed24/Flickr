import { combineReducers } from "redux";
import serviceReducer from "./serviceReducer";
import {
	LOGIN,
	SIGNUP,
	USER,
	LOGOUT,
} from "../actions/ActionsTypes";


const appReducer = combineReducers({
	loginReducer: serviceReducer(USER),
	singupReducer: serviceReducer(SIGNUP),
	});

const rootReducer = (state, action) => {
	if (action.type === LOGOUT) {
		let newState = {};
		for (let key of Object.keys(state)) {
			newState[key] = {
				...state[key],
				data: [],
				meta: { current_page: 0, last_page: 0 }
			};
		}
		state = {
			...newState
		};
	}
	return appReducer(state, action);
};

export default rootReducer;
