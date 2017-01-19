import React from 'react';
import TileDisplay from './TileDisplay';
import WordDisplay from './WordDisplay';

export default class Game extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      currentWord: '',
      visitedTiles: []
    }

    this.isLegalMove = this.isLegalMove.bind(this);
    this.markTileAsVisited = this.markTileAsVisited.bind(this);
    this.isLegalUndo = this.isLegalUndo.bind(this);
  }

  isLegalMove(tile) {
    if(this.state.visitedTiles.length < 1) {
      this.markTileAsVisited(tile);
      return true;
    }
    var currentTileRow = tile.props.row;
    var currentTileColumn = tile.props.column;

    var lastTile = this.state.visitedTiles[this.state.visitedTiles.length-1];
    var lastTileRow = lastTile.props.row;
    var lastTileColumn = lastTile.props.column;


    if(Math.abs(currentTileRow - lastTileRow) <= 1 && Math.abs(currentTileColumn - lastTileColumn) <= 1) {
      this.markTileAsVisited(tile);
      return true;
    }

    return false;
  }

  isLegalUndo(tile) {
    var visitedTiles = this.state.visitedTiles;

    if(visitedTiles.length === 1) {
      visitedTiles.pop();
      this.setState({
        visitedTiles: visitedTiles
      })
      return true;      
    }
    if(tile === visitedTiles[visitedTiles.length-1]) {
      visitedTiles.pop();
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
  }



  render() {
    return (
      <div>
      	<TileDisplay isLegalUndo={this.isLegalUndo} isLegalMove={this.isLegalMove} currentWord={this.state.currentWord} visitedTiles={this.state.visitedTiles} board={this.props.board} />
      	<WordDisplay currentWord={this.state.currentWord} />
      </div>
    );
  }
}
