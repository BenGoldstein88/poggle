import React from 'react';
import Tile from './Tile';
export default class TileDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      tiles: []
    }

    this.populateTiles = this.populateTiles.bind(this);
    this.resetTile = this.resetTile.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
  }

  componentWillMount() {
    // if(this.props.reset === true) {
    //   console.log("Resetting!");
    //   this.resetTiles();
    //   this.props.toggleReset();
    //   return null;
    // }

    var tiles = this.populateTiles();

    this.setState({
      tiles: tiles
    })
  }

  componentWillUpdate(nextProps, nextState) {
    if(!!nextProps.reset) {
      // var tiles = this.state.tiles;
      // console.log("tiles: ", tiles);
      // for(var i in tiles) {
      //   var tileRow = tiles[i];
      //   for(var j in tileRow) {
      //     var cloneTile = tileRow[j].props.resetTile(tileRow[j]);
      //     tileRow[j] = cloneTile;
      //   }
      //   tiles[i] = tileRow;
      // }
      // this.setState({
      //   tiles: tiles
      // })
      // console.log("tiles: (updated)", tiles);
      // this.props.toggleReset();
      var tiles = this.populateTiles();
      this.setState({
        tiles: tiles
      })
      this.props.toggleReset();      
    }
    // console.log("nextProps (for display): ", nextProps);
  }

  resetTile(tile) {
    // tile.setState({
    //   clicked: false
    // })
    var cloneTile = <Tile clicked={false} key={tile.key} resetTile={this.resetTile} row={tile.props.row} toggleClicked={this.toggleClicked} column={tile.props.column} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={tile.props.letter} />
    return cloneTile;
  }

  toggleClicked(tile) {
    var cloneTile = <Tile clicked={!tile.props.clicked} key={tile.key} resetTile={this.resetTile} toggleClicked={this.toggleClicked} row={tile.props.row} column={tile.props.column} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={tile.props.letter} />

    var tiles = this.state.tiles;
    tiles[tile.props.row][tile.props.column] = cloneTile;

    this.setState({
      tiles: tiles
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
        var tile = <Tile key={i+''+j+''} row={i} column={j} clicked={false} resetTile={this.resetTile} toggleClicked={this.toggleClicked} toggleReset={this.props.toggleReset} reset={this.props.reset} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={currentLetter} />
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
