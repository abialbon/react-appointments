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
            appointments: aptData,
            filteredAppointments: aptData
        }
    },// GetInitialState

    addAppointment: function(item) {
        const tempApts = this.state.appointments;
        tempApts.push(item);
        this.setState({
            appointments: tempApts,
            filteredAppointments: tempApts
        });
    }, //addAppointment

    deleteAppointment: function(item) {
        let tempApts = _.without(this.state.appointments, item);
        this.setState({
            appointments: tempApts,
            filteredAppointments: tempApts
        });
    }, //deleteAppointment 

    searchAppointments: function(q) {
        let tempApts = this.state.appointments;
        tempApts = tempApts.filter(function(item) {
            if (
                (item.studentName.toLowerCase().indexOf(q) > -1) ||
                (item.course.toLowerCase().indexOf(q) > -1) ||
                (item.notes.toLowerCase().indexOf(q) > -1) ||
                (item.displayDate.indexOf(q) > -1)
            ) {
                return item;
            }
        }.bind(this));
        this.setState({
            filteredAppointments: tempApts
        });
    },
    
    render: function() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    <AddAppointments 
                    handleAdd = { this.addAppointment }
                    />
                    <Search 
                    handleSearch = {this.searchAppointments }
                    />    
                </div>
                </div>
                    <Appointments 
                        aptData={ this.state.filteredAppointments }
                        handleDelete = { this.deleteAppointment }
                    />
            </div>
        );
    }
});

ReactDOM.render(<App />,
                document.getElementById('app'));
