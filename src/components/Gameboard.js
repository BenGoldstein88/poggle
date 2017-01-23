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
      resetGameBool: false,
      colorMap: {
        0: '#ffe6e6',
        1: '#ffcccc', 
        2: '#ff9999',
        3: '#ff8080',
        4: '#ff6666',
        5: '#ff4d4d', 
        6: '#ff3333', 
        7: '#ff1a1a',
        8: '#ff0000',
        9: '#e60000',
        10: '#cc0000',
        11: '#b30000',
        12: '#990000',
        13: '#800000',
        14: '#660000'
      },
      fontColorMap: {
        0: '#4d3d00',
        1: '#665200', 
        2: '#806600',
        3: '#b38f00',
        4: '#cca300',
        5: '#e6b800', 
        6: '#ffcc00', 
        7: '#ffd11a',
        8: '#ffd633',
        9: '#ffdb4d',
        10: '#ffe066',
        11: '#ffe680',
        12: '#ffeb99',
        13: '#fff0b3',
        14: '#fff5cc'        
      }
    }

    this.populateBoard = this.populateBoard.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    this.clearScoreboard = this.clearScoreboard.bind(this);
    this.pickRandomIndex = this.pickRandomIndex.bind(this);
    this.addWordToSubmittedWords = this.addWordToSubmittedWords.bind(this);
    this.toggleResetGame = this.toggleResetGame.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    this.randomizeCurrentBoard = this.randomizeCurrentBoard.bind(this);
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

  randomizeCurrentBoard() {
    var board = this.state.board;
    var flattenedBoard = [];
    for(var i in board) {
      flattenedBoard = flattenedBoard.concat(board[i]);
    }

    var currentIndex = flattenedBoard.length;
    var tempValue;
    var randomIndex;

    while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex -= 1;

      tempValue = flattenedBoard[currentIndex];
      flattenedBoard[currentIndex] = flattenedBoard[randomIndex];
      flattenedBoard[randomIndex] = tempValue;
    }

    var newBoard = new Array()

    for(var i = 0; i < flattenedBoard.length; i += Math.sqrt(flattenedBoard.length)) {
      var boardRow = [flattenedBoard[i], flattenedBoard[i+1], flattenedBoard[i+2], flattenedBoard[i+3], flattenedBoard[i+4]];
      newBoard.push(boardRow)
    }

    this.setState({
      board: newBoard
    })
    return null;
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
      resetGameBool: true,
      board: board
    })
  }

  toggleResetGame() {
    this.setState({
      resetGameBool: !this.state.resetGame
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
      	<Game resetGame={this.handleResetGame} shuffleBoard={this.randomizeCurrentBoard} colorMap={this.state.colorMap} fontColorMap={this.state.fontColorMap} resetGameBool={this.state.resetGame} toggleResetGame={this.toggleResetGame} submittedWords={this.state.submittedWords} addWordToSubmittedWords={this.addWordToSubmittedWords} board={this.state.board} />
      	<Scoreboard colorMap={this.state.colorMap} fontColorMap={this.state.fontColorMap} color={this.props.color} resetGame={this.handleResetGame} submittedWords={this.state.submittedWords} />
      </div>
    );
  }
}
