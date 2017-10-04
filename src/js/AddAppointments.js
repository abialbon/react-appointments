const React = require('react');

const AddAppointments = React.createClass({
    render: function() {
        return (
					<div className="col-md-8">
					<div className="card">
							<div className="card-header">
									Add an appointment
							</div>
							<div className="card-body">
									<form>
										<div className="row">
												<div className="col-lg-6">
														<div className="form-group">
																<label htmlFor="name">Name</label>
																<input type="text" className="form-control" id="name" placeholder="Your name here..." />
														</div>
														<div className="form-group">
															<label htmlFor="course">Course</label>
															<input type="text" className="form-control" id="course" placeholder="Course"/>
														</div>
														<div className="form-group">
															<label htmlFor="notes">Course</label>
															<textarea className="form-control" id="notes" placeholder="Notes"></textarea>
														</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<label htmlFor="date">Date</label>
														<input type="date" className="form-control" id="date" />
													</div>
													<div className="form-group">
														<label htmlFor="time">Time</label>
														<input type="time" className="form-control" id="time" />
													</div>
												</div>
										</div>
										<div className="row">
											<div className="col align-self-end">
													<button className="btn btn-danger">Clear</button>
													<button type="submit" className="btn btn-primary">Add</button>
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