import React, { Component } from 'react';

import { Link } from "react-router-dom";

class NotHome extends Component {
    render() {
        return (
            <div className="Info">
                <h2>Not Home</h2>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default NotHome;
