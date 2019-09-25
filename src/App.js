import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router, Route } from "react-router-dom";

import API  from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import config from './aws-exports'

import './App.css';
import Profile from './components/Profile';
import Home from './pages/Home';
import NotHome from './pages/NotHome';

API.configure(config);
PubSub.configure(config);
Amplify.Logger.LOG_LEVEL = 'DEBUG';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Profile/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/notHome" component={NotHome} />
                </div>
            </Router>

        )
    }
}

export default App;
