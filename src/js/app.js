const React = require('react');
const ReactDOM = require('react-dom');

const AddAppointments = require('./AddAppointments');
const Search = require('./Search');
const Appointments = require('./Appointments');

const App = React.createClass({
    render: function() {
        return (
            <div>
                <div className="container">
                <div className="row">
                    <AddAppointments />
                    <Search />    
                </div>
                </div>
                    <Appointments />
            </div>
        );
    }
});

ReactDOM.render(<App />,
                document.getElementById('app'));