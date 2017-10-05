const React = require('react');

const Tick = React.createElement('i', {className: 'fa fa-check'}, "");

const Search = React.createClass({
    searchAppointments: function() {
        let query = this.refs.search.value;
        query = query.toLowerCase();
        this.props.handleSearch(query);
    }, 

    sortAppointments: function(e) {
        let sortBy = e.target.id;
        this.props.handleSort(sortBy, this.props.order);
    },

    orderAppointments: function(e) {
        let order = e.target.id;
        this.props.handleSort(this.props.sortBy, order);
    },

    render: function() {
        const sortBy = this.props.sortBy;
        const order = this.props.order;
        return (
            <div className="col-md-4">
            <div className="input-group">
                    <input onChange={this.searchAppointments } type="text" ref="search" className="form-control" placeholder="Search"/>
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                            Sort By
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" id="studentName" onClick={ this.sortAppointments }>Name { sortBy == 'studentName' ? Tick : null }</a>
                            <a className="dropdown-item" id="course" onClick={ this.sortAppointments }>Course { sortBy == 'course' ? Tick : null }</a>
                            <a className="dropdown-item" id="date" onClick={ this.sortAppointments }>Date & Time { sortBy == 'date' ? Tick : null }</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" id="asc" onClick={ this.orderAppointments }>Ascending { order == 'asc' ? Tick : null }</a>
                            <a className="dropdown-item" id="desc" onClick={ this.orderAppointments }>Descending { order == 'desc' ? Tick : null }</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;