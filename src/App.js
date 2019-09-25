import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './graphql/mutations'
import config from './aws-exports'

import './App.css';
import Profile from './components/Profile';
import Home from './pages/Home';
import NotHome from './pages/NotHome';

Amplify.configure(config);
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
