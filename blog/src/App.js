import React, { Component } from 'react';

import './style/App.css';

import Content from './Content';

class App extends Component {

  render() {
    return (
      <div id="App">
        <div id="App_header">
          <h1 id="App_title">JKEE.IO</h1>
          <h4 id="App_subtitle">Lean Blog</h4>
        </div>
        <div id="App_content">
          <Content />
        </div>
      </div>
    );
  }

}

export default App;
