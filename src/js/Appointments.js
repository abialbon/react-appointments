const React = require('react');
const AptList = require('./AptList');

const Appointments = React.createClass({
    render: function() {
        const appointments = this.props.aptData;
        displayApts = appointments.map(function(item, index){
            return (
                <AptList 
                    item = { item }
                    key = { index }
                    handleDelete = { this.props.handleDelete }
                />
            );
        }.bind(this));
        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <h4>Appointments</h4>
                </div>
                </div>
                { displayApts }
            </div>
        );
    }
});

module.exports = Appointments;