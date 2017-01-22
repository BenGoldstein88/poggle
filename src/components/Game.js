import React from 'react';
import TileDisplay from './TileDisplay';
import WordDisplay from './WordDisplay';
import { Button, Position, Toaster, Intent } from "@blueprintjs/core";


export default class Game extends React.Component {


  constructor(props) {
    super(props);
    const toaster = Toaster.create()

    this.state = {
      toaster: toaster,
      currentWord: '',
      visitedTiles: [],
      reset: false,
      submit: false,
      style: {
        height: '100%',
        width: '69%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative'
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
    this.resetCurrentWord = this.resetCurrentWord.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(!!this.props.resetGame) {
      this.resetBoard();
      this.props.toggleResetGame();
    }
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
      visitedTiles.pop();
      this.removeLetterFromCurrentWord();
      this.setState({
        visitedTiles: visitedTiles
      })
      return true;
    }

    this.state.toaster.show({
      message: 'Illegal Undo! Only the last letter can be removed.',
      intent: Intent.DANGER,
      canEscapeKeyClear: true,
      timeout: 1500
    })
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
      var message = "You have already submitted the word " + currentWord.toUpperCase() + "!";
      this.state.toaster.show({
        message: message,
        intent: Intent.WARNING,
        canEscapeKeyClear: true,
        timeout: 1500
      })
      return false;
    }

    if(currentWord.length < 3) {
      var message = "Too short! Word must be at least 3 letters.";
      this.state.toaster.show({
        message: message,
        intent: Intent.DANGER,
        canEscapeKeyClear: true,
        timeout: 1500
      })
      return false;
    }

    // submittedWords.push(currentWord);
    this.props.addWordToSubmittedWords(currentWord);
    var message = '';
    var points = Math.min(currentWord.length-2, 6);

    switch(currentWord.length) {
      case 3:
        message += "Nice! "
        break;
      case 4:
        message += "Great! " 
        break;
      case 5:
        message += "Wow! "
        break;

      case 6:
        message += "Awesome! "
        break;

      case 7:
        message += "Amazing! "
        break;

      default:
        message += "Unbelievable! "

    }

    message += currentWord.toUpperCase() + " is worth " + points + " points!";

    this.state.toaster.show({
      message: message,
      intent: Intent.SUCCESS,
      canEscapeKeyClear: true,
      timeout: 1500
    })
    this.setState({
      visitedTiles: [],
      currentWord: '',
      reset: true
    })
    // this.resetBoard();

  }

  resetBoard() {
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

  resetCurrentWord() {
    this.setState({
      currentWord: '',
      visitedTiles: []
    })
  }



  render() {
    return (
      <div style={this.state.style} >
      	<TileDisplay shuffleBoard={this.props.shuffleBoard} resetCurrentWord={this.resetCurrentWord} colorMap={this.props.colorMap} fontColorMap={this.props.fontColorMap} toggleReset={this.toggleReset} reset={this.state.reset} isLegalUndo={this.isLegalUndo} isLegalMove={this.isLegalMove} currentWord={this.state.currentWord} visitedTiles={this.state.visitedTiles} board={this.props.board} />
      	<WordDisplay numVisitedTiles={this.state.visitedTiles.length} colorMap={this.props.colorMap} fontColorMap={this.props.fontColorMap} submitWord={this.handleSubmitWord} currentWord={this.state.currentWord} />
      </div>
    );
  }
}
