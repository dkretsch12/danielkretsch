import React, { Component } from 'react';
import profile from '../images/profile.jpg'

class Profile extends Component {
	render() {
		return (
			<header className="Profile">
			    <img className="profile-img" src={profile} alt="profile" />
			    <h4 style={{ marginBottom: 0 }}>Daniel Kretsch</h4>
			    <h6 style={{ margin: 0 }}>dkretsch12@gmail.com</h6>
			    <h6 style={{ margin: 0 }}>(763)-567-0150</h6>
  			</header>
  		);
	}
}

export default Profile;