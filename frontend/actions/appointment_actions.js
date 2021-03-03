import * as AppointmentAPIUtil from "../util/appointment_api_util";


export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";

export const receiveAppointments = (appointments) => ({
  type: RECEIVE_APPOINTMENTS,
  appointments,
});

export const getAppointments = () => (dispatch) => (
  AppointmentAPIUtil.fetchAppointments()
    .then((appointments) => dispatch(receiveAppointments(appointments)))
)

export const createAppointment = (appointment) => (dispatch) => {
  return AppointmentAPIUtil.createAppointment(appointment)

}
    // .then((appointments) => dispatch(receiveAppointments(appointments)))

