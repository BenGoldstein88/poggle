import React from 'react';

export default class TotalScore extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	TOTAL SCORE: {this.props.totalScore}
      </div>
    );
  }
}
