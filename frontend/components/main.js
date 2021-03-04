import React from 'react';

import Timer from './timer';

class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            connected: false,
            status: false,
            power: false,
            data: 'N/A',
            timeRemaining: 0,
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.intervalHandle = setInterval(() => this.tick(), 1000);
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
        if (this.state.timeRemaining <= 0) {
            clearInterval(this.handleCountdown)
            this.setState({
                status: false
            })
        } else if (this.state.status === true && this.state.connected === true){
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
            if (this.state.status === false) {
                this.setState({
                    status: true
                })
            } else {
                this.setState({
                    status: false
                })
            }
        } else {
            alert('Please connect to hardware...')
        }
    }

    handleTimer() {
        this.setState({
            timeRemaining: event.target.value
        })
    }

    reset() {
        let dropDown = document.getElementById('dropdown');
        dropDown.selectedIndex = 0;
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.connected === false ? 
                    <button onClick={() => this.handleConnect()}>Connect</button> :
                    <button onClick={() => this.handleConnect()}>Disconnect</button>}
                </div>
                <div>
                    {this.state.status === false ? 
                    <button onClick={() => this.handleStatus()}>Start</button> :
                    <button onClick={() => this.handleStatus()}>Stop</button>}
                </div>
                <Timer mainCallback={this.handleTimer} timeRemaining={this.state.timeRemaining} status={this.state.status}/>
                <div>
                    Data: {this.state.data}
                </div>
            </div>
        )
    }
}

export default Main;