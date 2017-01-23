import React from 'react';
import TotalScore from './TotalScore';
import ResetButton from './ResetButton';
import Typist from 'react-typist';
export default class Scoreboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        height: '100%',
        width: '29%',
        display: 'inline-block',
        // border: '1px solid green',
        position: 'absolute',
        top: '0px',
        minWidth: '200px'
      }
    }
  }

  calculateTotalScore() {
    var submittedWords = this.props.submittedWords;
    var totalScore = 0;
    for(var i in submittedWords) {
      var currentWord = submittedWords[i];
      var currentWordScore = Math.min(currentWord.length-2, 6);
      totalScore += currentWordScore;
    }

    return totalScore;
  }

  render() {
  	var submittedWords = this.props.submittedWords;
    var totalScore = this.calculateTotalScore();
    var tableRows = [];
    for(var i in submittedWords) {
      var tableRow = <tr key={i}><td style={{textAlign: 'center', width: '50%'}}><Typist cursor={{hideWhenDone: true, element: ''}}>{submittedWords[i].toUpperCase()}</Typist></td><td style={{textAlign: 'center', width: '50%'}}>{Math.min(submittedWords[i].length-2, 6)}</td></tr>
      tableRows.push(tableRow)
    }

    var tableClass = 'pt-table pt-condensed pt-interactive '

    var color = 'black';
    if(this.props.submittedWords.length > 0) {
      color = this.props.colorMap[Math.min(this.props.submittedWords[this.props.submittedWords.length-1].length, 14)];
    }
    return (
      <div style={this.state.style}>
        <TotalScore color={color} totalScore={totalScore} />
        <table style={{
          width: '100%',
          textAlign: 'center'
        }} className={tableClass}>
          <thead style={{width: '100%', textAlign: 'center'}}>
            <tr>
              <th style={{textAlign: 'center'}}>WORD</th>
              <th style={{textAlign: 'center'}}>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}
