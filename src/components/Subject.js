import React, { Component } from 'react';

class Subject extends Component {
	render() {
		const { title } = this.props;

    	return (
    		<div className="Subject">
  				<h4 style={{ marginBottom: 0 }}>{title}</h4>
    		</div>
    	);
  	}
}

export default Subject;