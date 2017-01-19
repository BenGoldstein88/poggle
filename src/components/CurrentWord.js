import React from 'react';

export default class CurrentWord extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	{this.props.currentWord}
      </div>
    );
  }
}
