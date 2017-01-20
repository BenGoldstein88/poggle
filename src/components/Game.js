import React from 'react';
import TileDisplay from './TileDisplay';
import WordDisplay from './WordDisplay';

export default class Game extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      currentWord: '',
      visitedTiles: [],
      reset: false,
      submit: false,
      style: {
        height: '100%',
        width: '59%',
        display: 'inline-block'
      }
    }

    this.isLegalMove = this.isLegalMove.bind(this);
    this.markTileAsVisited = this.markTileAsVisited.bind(this);
    this.isLegalUndo = this.isLegalUndo.bind(this);
    this.addLetterToCurrentWord = this.addLetterToCurrentWord.bind(this);
    this.removeLetterFromCurrentWord = this.removeLetterFromCurrentWord.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.handleSubmitWord = this.handleSubmitWord.bind(this);
    this.toggleReset = this.toggleReset.bind(this);
  }

  isLegalMove(tile) {
    if(this.state.visitedTiles.length < 1) {
      this.markTileAsVisited(tile);
      this.addLetterToCurrentWord(tile.props.letter);
      return true;
    }
    var currentTileRow = tile.props.row;
    var currentTileColumn = tile.props.column;

    var lastTile = this.state.visitedTiles[this.state.visitedTiles.length-1];
    var lastTileRow = lastTile.props.row;
    var lastTileColumn = lastTile.props.column;


    if(Math.abs(currentTileRow - lastTileRow) <= 1 && Math.abs(currentTileColumn - lastTileColumn) <= 1) {
      this.addLetterToCurrentWord(tile.props.letter);
      this.markTileAsVisited(tile);
      return true;
    }

    return false;
  }

  isLegalUndo(tile) {
    var visitedTiles = this.state.visitedTiles;

    if(visitedTiles.length === 1) {
      visitedTiles.pop();
      this.removeLetterFromCurrentWord(tile.props.letter);
      this.setState({
        visitedTiles: visitedTiles
      })
      return true;      
    }
    // var lastTile = visitedTiles[visitedTiles.length-1];
    // debugger;
    if(tile.props.row === visitedTiles[visitedTiles.length-1].props.row && tile.props.column === visitedTiles[visitedTiles.length-1].props.column) {
      console.log("checkcomplete")
      visitedTiles.pop();
      this.removeLetterFromCurrentWord();
      this.setState({
        visitedTiles: visitedTiles
      })
      return true;
    }
      console.log("visitedTiles: ", visitedTiles);
    return false;
  }

  markTileAsVisited(tile) {
    var visitedTiles = this.state.visitedTiles;
    visitedTiles.push(tile);

    this.setState({
      visitedTiles: visitedTiles
    })

    return null;
  }

  addLetterToCurrentWord(letter) {
    var currentWord = this.state.currentWord;

    currentWord += letter;

    this.setState({
      currentWord: currentWord
    })

    return null;

  }

  removeLetterFromCurrentWord() {
    var currentWord = this.state.currentWord;

    currentWord = currentWord.substring(0, currentWord.length-1);

    this.setState({
      currentWord: currentWord
    })

    return null;
  }

  handleSubmitWord() {
    var submittedWords = this.props.submittedWords;
    var currentWord = this.state.currentWord;

    if(submittedWords.includes(currentWord)) {
      console.log("Word already submitted!!")
      return false;
    }

    if(currentWord.length < 3) {
      console.log("Word too short! Must be at least 3 letters.");
      return false;
    }

    // submittedWords.push(currentWord);
    this.props.addWordToSubmittedWords(currentWord);
    
    this.setState({
      visitedTiles: [],
      currentWord: '',
      reset: true
    })
    // this.resetBoard();

  }

  resetBoard() {
    console.log("Resetting the board!");
    this.setState({
      visitedTiles: [],
      currentWord: '',
      reset: !this.state.reset
    })
  }

  toggleReset() {
    this.setState({
      reset: !this.state.reset
    })
  }



  render() {
    return (
      <div style={this.state.style} >
      	<TileDisplay toggleReset={this.toggleReset} reset={this.state.reset} isLegalUndo={this.isLegalUndo} isLegalMove={this.isLegalMove} currentWord={this.state.currentWord} visitedTiles={this.state.visitedTiles} board={this.props.board} />
      	<WordDisplay submitWord={this.handleSubmitWord} currentWord={this.state.currentWord} />
      </div>
    );
  }
}
