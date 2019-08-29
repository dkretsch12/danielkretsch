import React, { Component } from 'react';

import Subject from '../components/Subject';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="Info">
                <Subject
                    title="I am currently working on updating my website."
                    body="Please check back soon and hopefully it'll be up by then!"
                />
            </div>
        )
    }
}

export default Home;
