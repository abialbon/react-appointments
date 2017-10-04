const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');

const AddAppointments = require('./AddAppointments');
const Search = require('./Search');
const Appointments = require('./Appointments');

const aptData = require('./aptData');


const App = React.createClass({
    getInitialState: function() {
        return {
            appointments: aptData
        }
    },// GetInitialState

    addAppointment: function(item) {
        const tempApts = this.state.appointments;
        tempApts.push(item);
        this.setState({
            appointments: tempApts
        });
    }, //addAppointment

    deleteAppointment: function(item) {
        let tempApts = _.without(this.state.appointments, item);
        this.setState({
            appointments: tempApts
        });
    }, //deleteAppointment 
    
    render: function() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    <AddAppointments 
                    handleAdd = { this.addAppointment }
                    />
                    <Search />    
                </div>
                </div>
                    <Appointments 
                        aptData={ this.state.appointments }
                        handleDelete = { this.deleteAppointment }
                    />
            </div>
        );
    }
});

ReactDOM.render(<App />,
                document.getElementById('app'));