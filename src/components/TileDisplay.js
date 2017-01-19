import React from 'react';
import Tile from './Tile';
export default class TileDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      tiles: []
    }

    this.populateTiles = this.populateTiles.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
  }

  componentWillMount() {
    if(this.props.reset === true) {
      console.log("Resetting!")
      this.resetTiles();
      this.props.toggleReset();
      return null;
    }

    var tiles = this.populateTiles();

    this.setState({
      tiles: tiles
    })
  }

  populateTiles() {

    var tiles = new Array();
    var board = this.props.board;

    console.log("tiles: ", tiles);

    for(var i = 0; i < board.length; i++) {
      var currentRow = board[i];
      var tileRow = [];
      for(var j = 0; j < board.length; j++) {
        var currentLetter = currentRow[j];
        var tile = <Tile key={i+''+j+''} row={i} column={j} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={currentLetter} />
        // tiles[i][j] = tile;
        tileRow.push(tile);
      }
      tiles.push(tileRow);
    }
    console.log("tiles: ", tiles);

    return tiles;    
  }

  resetTiles() {
    var tiles = this.populateTiles();

    this.setState({
      tiles: tiles
    })
  }


  render() {
    var tiles = this.state.tiles;


    return (
      <div>
          {tiles}
      </div>

    );
  }
}
