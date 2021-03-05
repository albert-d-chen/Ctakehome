import * as LogAPIUtil from "../util/log_api_util";


export const RECEIVE_LOGS = "RECEIVE_LOGS";

export const receiveLogs = (logs) => ({
  type: RECEIVE_LOGS,
  logs,
});

export const getLogs = () => (dispatch) => (
  LogAPIUtil.fetchLogs()
    .then((logs) => dispatch(receiveLogs(logs)))
)

export const createLog = (log) => (dispatch) => {
  return LogAPIUtil.createLog(log)

}
    // .then((appointments) => dispatch(receiveAppointments(appointments)))

