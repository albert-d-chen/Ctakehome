import { combineReducers } from "redux";
import appointmentsReducer from "./appointments_reducer";
import physiciansReducer from './physicians_reducer';

const rootReducer = combineReducers({
    physicians: physiciansReducer,
    appointments: appointmentsReducer
});

export default rootReducer;