import React from 'react';

export default class Scoreboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	var submittedWords = this.props.submittedWords;
    return (
      <div>
      	{submittedWords}
      </div>
    );
  }
}
