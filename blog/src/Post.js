import React, { Component } from 'react';
import './style/Post.css';

class Post extends Component {

  render() {
    return (
      <div className="Post">
        <h1>The actual post title: { this.props.match.params.hash }</h1>
        <p>Here is a nice caption about the post</p>
        <p>Here is a nice caption about the post</p>
        <p>Here is a nice caption about the post</p>
        <p>Here is a nice caption about the post</p>
        <p>Here is a nice caption about the post</p>
      </div>
    );
  }

}

export default Post;
