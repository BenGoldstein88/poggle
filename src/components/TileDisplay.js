import React from 'react';
import Tile from './Tile';
import TileRow from './TileRow';
export default class TileDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      tiles: [],
      style: {
        height: '80%',
        width: '100%'
      },
      tileRows: []
    }

    this.populateTiles = this.populateTiles.bind(this);
    // this.resetTile = this.resetTile.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
    this.setTileRows = this.setTileRows.bind(this);
  }

  componentWillMount() {
    // if(this.props.reset === true) {
    //   console.log("Resetting!");
    //   this.resetTiles();
    //   this.props.toggleReset();
    //   return null;
    // }

    var tiles = this.populateTiles();
    var tileRows = this.setTileRows(tiles);

    this.setState({
      tiles: tiles,
      tileRows: tileRows
    })
  }

  setTileRows(tiles) {
    var tileRows = [];
    for(var i in tiles) {
      var tileRow = <TileRow key={i} tiles={tiles[i]} />
      tileRows.push(tileRow);
    }
    return tileRows;    

  }

  componentWillUpdate(nextProps, nextState) {
    if(!!nextProps.reset) {
      this.resetTiles();
      this.props.toggleReset();      
    }
  }

  // resetTile(tile) {

  //   var cloneTile = <Tile clicked={false} clickNumber={tile.props.clickNumber} key={tile.props.row + '' + tile.props.column + ''} row={tile.props.row} toggleClicked={this.toggleClicked} column={tile.props.column} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={tile.props.letter} />
  //   return cloneTile;
  // }

  toggleClicked(tile) {
    var newClicked = !tile.props.clicked;
    var clickNumber = 0;
    if(!!newClicked) {
      var clickNumber = this.props.visitedTiles.length
    }

    var cloneTile = <Tile clicked={newClicked} clickNumber={clickNumber} key={tile.props.row + '' + tile.props.column} toggleClicked={this.toggleClicked} row={tile.props.row} column={tile.props.column} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={tile.props.letter} />

    var tiles = this.state.tiles;
    tiles[tile.props.row][tile.props.column] = cloneTile;
    var tileRows = this.setTileRows(tiles);

    this.setState({
      tiles: tiles,
      tileRows: tileRows
    })
    return null;    

  }


  populateTiles() {

    var tiles = new Array();
    var board = this.props.board;

    for(var i = 0; i < board.length; i++) {
      var currentRow = board[i];
      var tileRow = [];
      for(var j = 0; j < board.length; j++) {
        var currentLetter = currentRow[j];
        var tile = <Tile key={i+''+j+''} row={i} column={j} clicked={false} clickNumber={0} toggleClicked={this.toggleClicked} toggleReset={this.props.toggleReset} reset={this.props.reset} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={currentLetter} />
        // tiles[i][j] = tile;
        tileRow.push(tile);
      }
      tiles.push(tileRow);
    }
    return tiles;    
  }

  resetTiles() {
    console.log("resetting!")
    console.log("this: ", this);
    var tiles = this.populateTiles();
    var tileRows = this.setTileRows(tiles);

    this.setState({
      tiles: tiles,
      tileRows: tileRows
    })
  }


  render() {
    // var tiles = this.state.tiles;
    // var tileRows = []
    // for(var i in tiles) {
    //   var tileRow = tiles[i];
    //   var tileRow = <div style ={{width: '100%'}} key={i} > {tileRow} </div>;
    //   tileRows.push(tileRow);
    // }

    var tileRows = this.state.tileRows;



    return (
      <div style={this.state.style}>
          {tileRows}
      </div>

    );
  }
}
