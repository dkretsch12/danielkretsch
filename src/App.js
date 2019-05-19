import React, { Component } from 'react';
import './App.css';

import Profile from './components/Profile';
import Subject from './components/Subject';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile/>
        <div className="Info">
          <Subject
            title="Experience"
            examples={examples.houserater}
          />
          <Subject title="Education"/>
          <Subject title="Languages"/>
          <Subject title="Tools"/>
        </div>
      </div>
    )
  }
}

export default App;
