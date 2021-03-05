import {connect} from 'react-redux';
import {createLog, getLogs} from '../actions/log_actions'
import Main from './main';

const mapSTP = (state) => ({
    logs: Object.values(state.logs)
})

const mapDTP = (dispatch) => ({
    createLog: (log) => dispatch(createLog(log)),
    getLogs: (logs) => dispatch(getLogs(logs))
});

export default connect(mapSTP, mapDTP)(Main);