import React, { Component } from 'react';

class Subject extends Component {
	render() {
		const { title, body } = this.props;

    	return (
    		<div className="Subject">
  				<h3 style={{ marginBottom: 0 }}>{title}</h3>
  				<h5 style={{ marginBottom: 0 }}>{body}</h5>
    		</div>
    	);
  	}
}

export default Subject;