import { connect } from "react-redux";

import { getAppointments} from "../actions/appointment_actions";
import AppointmentIndex from "./appointment_index";

const mapSTP = (state) => ({
  appointments: Object.values(state.appointments)
});

const mapDTP = (dispatch) => ({
  getAppointments: appointments => dispatch(getAppointments(appointments)),
});

export default connect(mapSTP, mapDTP)(AppointmentIndex);
