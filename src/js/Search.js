const React = require('react');

const Search = React.createClass({
    render: function() {
        return (
            <div className="col-md-4">
            <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                            Sort By
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Name</a>
                            <a className="dropdown-item" href="#">Course</a>
                            <a className="dropdown-item" href="#">Date & Time</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Ascending</a>
                            <a className="dropdown-item" href="#">Descending</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;