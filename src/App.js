import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Profile from './components/Profile';
import Home from './pages/Home';
import NotHome from './pages/NotHome';

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
