import React from 'react';
import TopLogo from './TopLogo';
import Gameboard from './Gameboard';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        height: '100%',
        width: '100%'
      }
    }

  }
  render() {
    return (
      <div style={this.state.style}>
        <TopLogo />
        <Gameboard />
      </div>
    );
  }
}
