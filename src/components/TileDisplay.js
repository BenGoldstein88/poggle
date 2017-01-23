import React from 'react';
import Tile from './Tile';
import TileRow from './TileRow';
import ShuffleBoardButton from './ShuffleBoardButton';
export default class TileDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      tiles: [],
      style: {
        height: '75%',
        width: '95%',
        margin: '0 auto',
        position: 'relative',
        align: 'center'
        // backgroundColor: 'lightblue'
      },
      tileRows: []
    }

    this.populateTiles = this.populateTiles.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
    this.setTileRows = this.setTileRows.bind(this);
    this.shuffleTiles = this.shuffleTiles.bind(this);
  }

  componentWillMount() {

    var tiles = this.populateTiles(this.props.board);
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

  componentDidUpdate(prevProps, prevState) {
    if(this.props.board !== prevProps.board) {
      var tiles = this.populateTiles(this.props.board);
      var tileRows = this.setTileRows(tiles);

      this.setState({
        tiles: tiles,
        tileRows: tileRows
      })      
    }
    
  }

  componentWillUpdate(nextProps, nextState) {
    if(!!nextProps.reset) {
      this.resetTiles();
      this.props.toggleReset();      
    }

  }


  toggleClicked(tile) {
    var newClicked = !tile.props.clicked;
    var clickNumber = 0;
    if(!!newClicked) {
      var clickNumber = this.props.visitedTiles.length;
    }

    var cloneTile = <Tile colorMap={this.props.colorMap} fontColorMap={this.props.fontColorMap} clicked={newClicked} clickNumber={clickNumber} key={tile.props.row + '' + tile.props.column} toggleClicked={this.toggleClicked} row={tile.props.row} column={tile.props.column} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={tile.props.letter} />

    var tiles = this.state.tiles;
    tiles[tile.props.row][tile.props.column] = cloneTile;
    var tileRows = this.setTileRows(tiles);

    this.setState({
      tiles: tiles,
      tileRows: tileRows
    })
    return null;    

  }


  populateTiles(board) {

    var tiles = new Array();

    for(var i = 0; i < board.length; i++) {
      var currentRow = board[i];
      var tileRow = [];
      for(var j = 0; j < board.length; j++) {
        var currentLetter = currentRow[j];
        if(currentLetter === 'q') {
          currentLetter = 'qu'
        }
        var tile = <Tile key={i+''+j+''} row={i} column={j} colorMap={this.props.colorMap} fontColorMap={this.props.fontColorMap} clicked={false} clickNumber={0} toggleClicked={this.toggleClicked} toggleReset={this.props.toggleReset} reset={this.props.reset} isLegalUndo={this.props.isLegalUndo} isLegalMove={this.props.isLegalMove} letter={currentLetter} />
        tileRow.push(tile);
      }
      tiles.push(tileRow);
    }
    return tiles;    
  }

  resetTiles() {
    console.log("resetting!")
    var tiles = this.populateTiles(this.props.board);
    var tileRows = this.setTileRows(tiles);

    this.setState({
      tiles: tiles,
      tileRows: tileRows
    })
  }

// shuffle does not work with alternate board sizes yet
  shuffleTiles() {
    console.log("shuffling!");
    this.props.shuffleBoard();
  }


  render() {

    var tileRows = this.state.tileRows;



    return (
      <div style={this.state.style}>

        <div style={{margin: '0 auto'}}>
          {tileRows}
        </div>
      </div>

    );
  }
}
