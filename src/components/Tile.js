import React from 'react';

export default class Tile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	clicked: false,
      style: {
        height: '20%',
        width: '18%',
        border: '1px solid blue',
        display: 'inline-block',
        align: 'center',
        textAlign: 'center',
        backgroundColor: 'pink'
      },
      clickedStyle: {
        height: '20%',
        width: '18%',
        border: '1px solid blue',
        display: 'inline-block',
        align: 'center',
        textAlign: 'center',
        backgroundColor: 'red'        
      }
    }

    this.onClick = this.onClick.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
    this.resetTile = this.resetTile.bind(this);
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("nextProps (tile): ", nextProps);
  //   if(nextProps.reset === true) {
  //     console.log("resetting the tile!");
  //     this.resetTile();
  //     // this.props.toggleReset();
  //   }    
    
  // }

  componentWillMount() {
    this.setState({
      clicked: this.props.clicked
    })
  }

  onClick(e) {
    e.preventDefault();

    if(this.props.clicked === false) {
      var legal = this.props.isLegalMove(this);     
    } else {
      var legal = this.props.isLegalUndo(this);
    }

    if(legal === true) {
      // this.toggleClicked();
      this.props.toggleClicked(this);
    }

  }

  resetTile() {
    console.log("resetting the tile!");
    this.setState({
      clicked: false
    })
  }

  toggleClicked() {
    // var style = this.state.style;
    // var clone = Object.assign({}, style);

    // if(clone.backgroundColor === 'pink') {
    //   clone.backgroundColor = 'red';
    // } else {
    //   clone.backgroundColor = 'pink'
    // }
    this.setState({
      // style: clone,
      clicked: !this.state.clicked
    })
  }

  render() {
    var style;
    if(!!this.props.clicked) {
      style = this.state.clickedStyle;
    } else {
      style = this.state.style;
    }

    return (
      <div onClick={this.onClick} style={style}>
        {this.props.letter}
      </div>
    );
  }
}
