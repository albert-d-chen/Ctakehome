import React from 'react';
import AppointmentContainer from './appointment_index_container'
import AppointmentForm from './form_container';

class PhysicianIndex extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            idx: null
        }
        this.logout=this.logout.bind(this);
    }

    componentDidMount() {
        this.props.getPhysicians();
        this.props.getAppointments();
    }

    componentDidUpdate(prevProps){
        if (prevProps.appointments.length !== this.props.appointments.length) {
            this.props.getAppointments();
        }
    }

    //set state to be physician clicked
    filterAppointments(physicianId, idx) {
        this.setState({id: physicianId, idx: idx})
    }

    logout(){
        this.setState({id:null})
    }

    //list physician names
    //filter appointments based on state
    render() {
        let {physicians, appointments} = this.props
        
        const physicianNames = physicians.map((physician,idx) => {
            return (
                <li key={idx} onClick={()=> this.filterAppointments(physician.id, idx)} className='names'>{physician.last_name}, {physician.first_name}</li>
            )
        })
        const filteredAppointments = appointments.filter(appointment => appointment.physician_id === this.state.id)

        return (
          <div>
            <div className='physician-names'>
                <h3>Physicians</h3>
                {physicianNames}
                <button onClick={this.logout} className='logout'>Logout</button>
            </div>
            <div className='appointments'>
                {this.state.idx !== null && this.state.id !== null ? 
                <div>
                    <h3>{`Dr. ${physicians[this.state.idx].first_name} ${physicians[this.state.idx].last_name}`}</h3> 
                    <h5>{`${physicians[this.state.idx].last_name.toLowerCase()}@notablehealth.com`}</h5> 
                    <AppointmentForm physicianId={this.state.id}/>
                </div>
                : <div/> }

                <AppointmentContainer filteredAppointments={filteredAppointments}/>
            </div>
          </div>
        );
    }
}

export default PhysicianIndex;