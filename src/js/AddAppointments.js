const React = require('react');

const AddAppointments = React.createClass({
	getInitialState: function() {
		return {
			formVisible: false
		}
	},

	clearForm: function() {
		this.refs.name.value = '';
		this.refs.course.value = '';
		this.refs.date.value = '';
		this.refs.time.value = '';
		this.refs.notes.value = '';
	},

	addAppointment: function(e) {
		e.preventDefault();
		let tempApt = {
			studentName: this.refs.name.value,
			course: this.refs.course.value,
			displayDate: this.refs.date.value + " " + this.refs.time.value,
			date: new Date(this.refs.date.value + " " + this.refs.time.value),
			notes: this.refs.notes.value
		}
		this.props.handleAdd(tempApt);
		this.clearForm();
	},

	toggleFormDisplay: function() {
		this.setState({
			formVisible: !this.state.formVisible
		});
	},

	render: function() {
			let formDisplay = {
				display: this.state.formVisible ? 'block' : 'none'
			}
			return (
				<div className="col-md-8">
				<div className="card" id="addAppointment">
						<div onClick={ this.toggleFormDisplay } className="card-header">
							<i className="fa fa-chevron-down"> </i> Add an appointment
						</div>
						<div style={ formDisplay } className="card-body">
								<form onSubmit={ this.addAppointment } >
									<div className="row">
											<div className="col-lg-6">
													<div className="form-group">
															<label htmlFor="name">Name</label>
															<input type="text" className="form-control" ref="name" placeholder="Your name here..." required/>
													</div>
													<div className="form-group">
														<label htmlFor="course">Course</label>
														<input type="text" className="form-control" ref="course" placeholder="Course" required/>
													</div>
													<div className="form-group">
														<label htmlFor="notes">Course</label>
														<textarea className="form-control" ref="notes" placeholder="Notes"></textarea>
													</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<label htmlFor="date">Date</label>
													<input type="date" className="form-control" ref="date" required />
												</div>
												<div className="form-group">
													<label htmlFor="time">Time</label>
													<input type="time" className="form-control" ref="time" required />
												</div>
											</div>
									</div>
									<div className="row">
										<div className="col align-self-end">
												<div id="clear" onClick={ this.clearForm } className="btn btn-danger">Clear</div>
												<button className="btn btn-primary">Add</button>
										</div>
									</div>
								</form>
						</div>
				</div>
		</div>
			);
    }
});

module.exports = AddAppointments;