import {connect} from 'react-redux';

import {getPhysicians} from '../actions/physician_actions'
import { getAppointments } from "../actions/appointment_actions";
import PhysicianIndex from './physician_index';

const mapSTP = (state) => ({
    appointments: Object.values(state.appointments),
    physicians: Object.values(state.physicians)
})

const mapDTP = (dispatch) => ({
  getAppointments: (appointments) => dispatch(getAppointments(appointments)),
  getPhysicians: (physicians) => dispatch(getPhysicians(physicians)),
});

export default connect(mapSTP, mapDTP)(PhysicianIndex);