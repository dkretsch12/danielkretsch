import React, { Component } from 'react';

class Subject extends Component {
	render() {
		const { title, body } = this.props;

    	return (
    		<div className="Subject">
				<h3>{title}</h3>
    		</div>
    	);
  	}
}

export default Subject;