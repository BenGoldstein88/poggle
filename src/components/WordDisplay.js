import React from 'react';
import CurrentWord from './CurrentWord';
import SubmitWordButton from './SubmitWordButton';

export default class WordDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        height: '20%',
        // minHeight: '600px',
      }}>
      	<CurrentWord numVisitedTiles={this.props.numVisitedTiles} colorMap={this.props.colorMap} fontColorMap={this.props.fontColorMap} currentWord={this.props.currentWord}/>
      	<SubmitWordButton numVisitedTiles={this.props.numVisitedTiles} colorMap={this.props.colorMap} fontColorMap={this.props.fontColorMap} submitWord={this.props.submitWord} />
      </div>
    );
  }
}
