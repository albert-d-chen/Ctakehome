import {connect} from 'react-redux';
import AppointmentForm from './form';
import {createAppointment, getAppointments} from '../actions/appointment_actions'

const mapSTP = () => ({
    appointment: {
        name: '',
        time: '',
        kind: ''
    }
})

const mapDTP = (dispatch) => ({
    createAppointment: (appointment) => dispatch(createAppointment(appointment)),
    getAppointments: (appointments) => dispatch(getAppointments(appointments))
})

export default connect(mapSTP, mapDTP)(AppointmentForm)