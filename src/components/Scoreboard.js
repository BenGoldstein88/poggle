import React from 'react';
import TotalScore from './TotalScore';
export default class Scoreboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        height: '100%',
        width: '39%',
        display: 'inline-block',
        border: '1px solid green',
        position: 'absolute',
        top: '0px'
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
      var tableRow = <tr key={i}><td>{submittedWords[i]}</td><td>{Math.min(submittedWords[i].length-2, 6)}</td></tr>
      tableRows.push(tableRow)
    }

    var tableClass = 'pt-table pt-condensed pt-interactive '
    return (
      <div style={this.state.style}>
        <table className={tableClass}>
          <thead>
            <th>WORD</th>
            <th>SCORE</th>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
        <TotalScore totalScore={totalScore} />
      </div>
    );
  }
}
