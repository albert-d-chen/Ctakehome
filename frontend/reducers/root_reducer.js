import { combineReducers } from "redux";
import logsReducer from "./logs_reducer";


const rootReducer = combineReducers({
    logs: logsReducer
});

export default rootReducer;