import React, { Component } from 'react';

import Subject from '../components/Subject';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="Info">
                <Subject
                    title="I am currently working on migrating my website to AWS Amplify."
                    body="I will add more content once it is migrated!"
                />
            </div>
        )
    }
}

export default Home;
