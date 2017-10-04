const React = require('react');

const Appointments = React.createClass({
    render: function() {
        return (
            <div>
                <div className="row">
                <div className="col-sm-12">
                    <h4>Appointments</h4>
                </div>
            </div>
                <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Student Name</h4>
                            <h5>Course</h5>
                            <p className="card-text">Appointment Notes</p>
                            <a href="#" className="btn btn-danger">Delete</a>
                        </div>
                </div>
            </div>
        );
    }
});

module.exports = Appointments;