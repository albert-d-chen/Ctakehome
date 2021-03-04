import React from 'react';

class Timer extends React.Component{
    constructor(props) {
        super(props)
    }

    onTrigger() {
        this.props.mainCallback();
    }

    render() {
        return (
            <div>
                <div> Select Time:
                    <select id='dropdown' onChange={() => this.onTrigger()}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div> Time Remaining: {this.props.timeRemaining} seconds</div>
            </div>
        )
    }
}

export default Timer;