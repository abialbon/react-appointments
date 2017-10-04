const React = require('react');

const Appointments = React.createClass({
    render: function() {
        const appointments = this.props.aptData;
        const displayApts = appointments.map(function(item, index) {
            return (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h4 className="card-title">{item.studentName}</h4>
                        <h5>{ item.course }</h5>
                        <p className="card-text">{item.notes}</p>
                        <p>{ item.displayDate }</p>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            );
        });
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