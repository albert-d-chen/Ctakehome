import React from 'react';

import Timer from './timer';

class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            connected: false,
            status: 'Stopped',
            data: 'N/A',
            timeRemaining: 0,
            timeSet: 0,
            view: false
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.intervalHandle = setInterval(() => this.tick(), 1000);
    }

    componentDidMount() {
        this.props.getLogs();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.connected !== this.state.connected) {
            this.props.createLog({...this.state})
                .then(() => this.props.getLogs())
        }
        if (prevState.status !== this.state.status) {
            this.props.createLog({...this.state})
                .then(() => this.props.getLogs())
        }
        if (prevState.data !== this.state.data) {
            this.props.createLog({...this.state})
                .then(() => this.props.getLogs())
        }
        if (prevState.timeRemaining !== this.state.timeRemaining) {
            this.props.createLog({...this.state})
                .then(() => this.props.getLogs())
        }
        if (prevState.timeSet !== this.state.timeSet) {
            this.props.createLog({...this.state})
                .then(() => this.props.getLogs())
        }
    }

    handleConnect() {
        if (this.state.connected === false) {
            this.setState({
                connected: true
            })
        } else {
            this.setState({
                connected: false
            })
        }
    }

    tick() {
        if (this.state.timeRemaining === 0) {
            clearInterval(this.handleCountdown)
            this.setState({
                status: 'Stopped'
            })
        } else if (this.state.status === 'Started' && this.state.connected === true){
            this.setState({
                timeRemaining: this.state.timeRemaining - 1,
                data: Math.floor(Math.random() * Math.floor(101))
            })

            if (this.state.timeRemaining === 0) {
                this.reset();
            }
        }   
    }

    handleStatus() {
        if (this.state.connected === true) {
            if (this.state.status === 'Stopped') {
                this.setState({
                    status: 'Started'
                })
                // this.props.createLog({...this.state})
            } else {
                this.setState({
                    status: 'Stopped'
                })
            }
        } else {
            alert('Please connect to hardware...')
        }
    }

    handleTimer() {
        this.setState({
            timeRemaining: event.target.value,
            timeSet: parseInt(event.target.value)
        })
    }

    reset() {
        let dropDown = document.getElementById('dropdown');
        dropDown.selectedIndex = 0;
    }

    handleLogs() {
        this.setState({
            view: !this.state.view
        })
    }

    render() {
        const logs = this.props.logs.map((log, idx) => (
            <tr key={idx}>
                <td>{idx}</td>
                <td>{log.connected.toString()}</td>
                <td>{log.status}</td>
                <td>{log.timeSet}</td>
                <td>{log.timeRemaining}</td>
                <td>{log.data}</td>
            </tr>
        ));

        return (
            <div>
                <div>
                    {this.state.connected === false ? 
                    <button onClick={() => this.handleConnect()}>Connect</button> :
                    <button onClick={() => this.handleConnect()}>Disconnect</button>}
                </div>
                <div>
                    {this.state.status === 'Stopped' ? 
                    <button onClick={() => this.handleStatus()}>Start</button> :
                    <button onClick={() => this.handleStatus()}>Stop</button>}
                </div>
                <Timer mainCallback={this.handleTimer} timeRemaining={this.state.timeRemaining} status={this.state.status}/>
                <div>
                    Data: {this.state.data}
                </div>
                <button onClick={() => this.handleLogs()}>{this.state.view === false ? 'View Logs' : 'Hide Logs'}</button>
                <div>
                    {this.state.view === true ?
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Connected</th>
                                <th>Status</th>
                                <th>Time Set</th>
                                <th>Time Remaining</th>
                                <th>Data</th>
                            </tr>
                            {logs}
                            
                        </tbody>
                    </table> :
                    <div></div>
                    }
                </div>
                
            </div>
        )
    }
}

export default Main;