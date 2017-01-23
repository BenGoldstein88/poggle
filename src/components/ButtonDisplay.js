import React from 'react';
import ResetButton from './ResetButton';
import ShuffleBoardButton from './ShuffleBoardButton';
export default class ButtonDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ShuffleBoardButton resetCurrentWord={this.props.resetCurrentWord} onClick={this.props.shuffleBoard} />
      	<ResetButton resetGame={this.props.resetGame}/>
      </div>
    );
  }
}
