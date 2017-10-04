const React = require('react');
const ReactDOM = require('react-dom');

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

    render: function() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    <AddAppointments />
                    <Search />    
                </div>
                </div>
                    <Appointments 
                        aptData={ this.state.appointments }
                    />
            </div>
        );
    }
});

ReactDOM.render(<App />,
                document.getElementById('app'));