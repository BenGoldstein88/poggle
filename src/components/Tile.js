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
      }
    }

    this.onClick = this.onClick.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
    this.resetTile = this.resetTile.bind(this);
  }

  onClick(e) {
    e.preventDefault();

    if(this.state.clicked === false) {
      var legal = this.props.isLegalMove(this);     
    } else {
      var legal = this.props.isLegalUndo(this);
    }

    if(legal === true) {
      this.toggleClicked();
    }

  }

  resetTile() {
    this.setState({
      clicked: false,
      style: {
        height: '20%',
        width: '18%',
        border: '1px solid blue',
        display: 'inline-block',
        align: 'center',
        textAlign: 'center',
        backgroundColor: 'pink'
      }
    })
  }

  toggleClicked() {
    var style = this.state.style;

    if(style.backgroundColor === 'pink') {
      style.backgroundColor = 'red';
    } else {
      style.backgroundColor = 'pink'
    }

    this.setState({
      style: style,
      clicked: !this.state.clicked
    })
  }

  render() {
    var style = this.state.style;
    return (
      <div onClick={this.onClick} style={style}>
        {this.props.letter}
      </div>
    );
  }
}
