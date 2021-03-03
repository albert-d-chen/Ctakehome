import {RECEIVE_PHYSICIAN, RECEIVE_PHYSICIANS} from '../actions/physician_actions'

const physiciansReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PHYSICIAN:
            return {[action.physician.id]: action.physician}
        case RECEIVE_PHYSICIANS:
            return Object.assign({}, state, action.physicians)
        default:
            return state;
    }
}

export default physiciansReducer;