import React from 'react';
import Game from './Game';
import Scoreboard from './Scoreboard';

export default class Gameboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	letterArray: ['aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', 'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', 'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', 'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', 'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu'],
    	board: [],
    	submittedWords: [],
    	boardSize: 5
    }

    this.populateBoard = this.populateBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.clearScoreboard = this.clearScoreboard.bind(this);
    this.pickRandomIndex = this.pickRandomIndex.bind(this);
  }

  componentWillMount() {

  	var board = this.populateBoard();
  	this.setState({
  		board: board
  	})

  }

  populateBoard() {
  	var letterArray = this.state.letterArray;
  	var boardSize = this.state.boardSize;
  	var board = new Array();

    console.log("startBoard: ", board);
    // debugger;

  	for(var i = 0; i < boardSize; i++) {
      var currentRow = board[i] || []
  		for(var j = 0; j < boardSize; j++) {
		  	var indexOfCurrentDie = this.pickRandomIndex(letterArray.length);
		  	var currentDie = letterArray[indexOfCurrentDie];
		  	var currentDieLetters = currentDie.split('');
        // console.log("currentDieLetters: ", currentDieLetters);
		  	var currentLetter = currentDieLetters[this.pickRandomIndex(currentDieLetters.length)];
		  	// currentRow[j] = currentLetter;
        currentRow.push(currentLetter);
        // console.log("board: ", board);
		  	letterArray.splice(indexOfCurrentDie, 1);
  		}
      board.push(currentRow);
  	}
  	console.log("finalBoard: ", board);
  	return board;  	
  }


  pickRandomIndex(length) {
  	return Math.floor(Math.random()*length);
  }

  resetBoard() {
  	this.clearScoreboard();
  	this.populateBoard();
  }

  clearScoreboard() {

  }

  render() {
    return (
      <div>
      	<Game board={this.state.board} />
      	<Scoreboard submittedWords={this.state.submittedWords} />
      </div>
    );
  }
}
