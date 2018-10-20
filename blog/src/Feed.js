import React, { Component } from 'react';
import Preview from './Preview';

class Feed extends Component {

  render() {
    return (
      <div className="Feed">
        <Preview/>
        <Preview/>
        <Preview/>
        <Preview/>
        <Preview/>
      </div>
    );
  }

}

export default Feed;
