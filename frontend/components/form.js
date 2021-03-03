import React from 'react';

class AppointmentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.props.appointment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createAppointment({...this.state, physician_id: this.props.physicianId})
            .then(() => this.props.getAppointments())
        this.setState({
            name: '',
            time: '',
            kind: ''
        })
    }

    update(field) {
        return (
            (e) => this.setState({[field]: e.currentTarget.value})
        )
    }

    render() {
        return (
            <div>
                <h3>Make Appointment</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type='text' value={this.state.name} onChange={this.update('name')} placeholder='Name'></input>
                    </label>
                    <label>
                        <input type='text' value={this.state.time} onChange={this.update('time')} placeholder='Time'></input>
                    </label>
                    <label>
                        <input type='text' value={this.state.kind} onChange={this.update('kind')} placeholder='Kind'></input>
                    </label>
                    <button>Confirm</button>
                </form>
            </div>
        )
    }
}

export default AppointmentForm;