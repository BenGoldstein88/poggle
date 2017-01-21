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
    	boardSize: 5,
      style: {
        height: '88%',
        width: '100%',
        position: 'relative',
        margin: '0 auto'
      },
      resetGame: false
    }

    this.populateBoard = this.populateBoard.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    this.clearScoreboard = this.clearScoreboard.bind(this);
    this.pickRandomIndex = this.pickRandomIndex.bind(this);
    this.addWordToSubmittedWords = this.addWordToSubmittedWords.bind(this);
    this.toggleResetGame = this.toggleResetGame.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
  }

  componentWillMount() {

  	var board = this.populateBoard();
  	this.setState({
  		board: board
  	})

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.board !== this.props.board) {
      var board = this.populateBoard();
      this.setState({
        board: board
      })
    }
  }

  populateBoard() {
  	var letterArray = ['aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', 'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', 'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', 'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', 'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu'];

  	var boardSize = this.state.boardSize;
  	var board = new Array();

    console.log("startBoard: ", board);
    // debugger;
    console.log("this: ", this);

  	for(var i = 0; i < boardSize; i++) {
      var currentRow = board[i] || [];
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

  addWordToSubmittedWords(currentWord) {
    var submittedWords = this.state.submittedWords;

    submittedWords.push(currentWord);

    this.setState({
      submittedWords: submittedWords
    })
  }



  handleResetGame() {
  	// this.clearScoreboard();
  	var board = this.populateBoard();
    this.setState({
      board: [],
      submittedWords: [],
      resetGame: true,
      board: board
    })
  }

  toggleResetGame() {
    this.setState({
      resetGame: !this.state.resetGame
    })
  }


  clearScoreboard() {
    this.setState({
      submittedWords: []
    })

  }

  render() {
    return (
      <div style={this.state.style}>
      	<Game resetGame={this.state.resetGame} toggleResetGame={this.toggleResetGame} submittedWords={this.state.submittedWords} addWordToSubmittedWords={this.addWordToSubmittedWords} board={this.state.board} />
      	<Scoreboard resetGame={this.handleResetGame} submittedWords={this.state.submittedWords} />
      </div>
    );
  }
}
