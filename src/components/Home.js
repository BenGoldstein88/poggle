import React from 'react';
import TopLogo from './TopLogo';
import Gameboard from './Gameboard';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }
  render() {
    return (
      <div>
        <TopLogo />
        <Gameboard />
      </div>
    );
  }
}
