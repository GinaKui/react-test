import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = (e) => {
    this.setState({comment: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({comment:''});
  };

  render(){
    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button onSubmit={this.handleSubmit}>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;