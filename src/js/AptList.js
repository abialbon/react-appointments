const React = require('react');

const AptList = React.createClass({
    deleteAppointment: function() {
        this.props.handleDelete(this.props.item);
    },
    render: function() {
        return (
            <div className="card">
            <div className="card-body">
                <h4 className="card-title">{this.props.item.studentName}</h4>
                <h5>{ this.props.item.course }</h5>
                <p className="card-text">{this.props.item.notes}</p>
                <p>{ this.props.item.displayDate }</p>
                <button onClick={ this.deleteAppointment } className="btn btn-danger">Delete</button>
            </div>
        </div>
        );
    }
});

module.exports = AptList;