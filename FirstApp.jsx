import React from 'react';

class FirstApp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "My first React Hello World"
    }
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.data}
        </h1>
      </div>
    );
  }
}

export default FirstApp;
