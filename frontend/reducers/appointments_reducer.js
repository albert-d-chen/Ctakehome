import {RECEIVE_APPOINTMENTS} from '../actions/appointment_actions'

const appointmentsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_APPOINTMENTS:
            return Object.assign({}, state, action.appointments)
        default:
            return state;
    }
}

export default appointmentsReducer;