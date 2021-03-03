import React from "react";

class AppointmentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    //prints table of appointments
    render() {
        const info = this.props.filteredAppointments.map((appointment, idx) => (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{appointment.name}</td>
                <td>{appointment.time}</td>
                <td>{appointment.kind}</td>
            </tr>
        ))
        return (
        <div>
            {info.length !== 0 ?
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Kind</th>
                    </tr>
                    {info}
                </tbody>
            </table>
            : <div/>}   
        </div>
        );
    }
}

export default AppointmentIndex;
