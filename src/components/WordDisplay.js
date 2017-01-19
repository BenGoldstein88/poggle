import React from 'react';
import CurrentWord from './CurrentWord';
import SubmitWordButton from './SubmitWordButton';

export default class WordDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<CurrentWord currentWord={this.props.currentWord}/>
      	<SubmitWordButton submitWord={this.props.submitWord} />
      </div>
    );
  }
}
