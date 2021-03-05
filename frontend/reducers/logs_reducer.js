import {RECEIVE_LOGS} from '../actions/log_actions'

const logsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_LOGS:
            return Object.assign({}, state, action.logs)
        default:
            return state;
    }
}

export default logsReducer;