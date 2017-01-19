import React from 'react';
import Tile from './Tile';
export default class TileDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      tiles: []
    }
  }

  componentWillMount() {
    var board = this.props.board;
    // var tiles = new Array(this.props.board.length).fill(new Array(this.props.board.length))
    var tiles = new Array();

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
