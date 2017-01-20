import React from 'react';

export default class Tile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	clicked: false,
      colorMap: {
        0: '#ffe6e6',
        1: '#ffcccc', 
        2: '#ff9999',
        3: '#ff8080',
        4: '#ff6666',
        5: '#ff4d4d', 
        6: '#ff3333', 
        7: '#ff1a1a',
        8: '#ff0000',
        9: '#e60000',
        10: '#cc0000',
        11: '#b30000',
        12: '#990000',
        13: '#800000',
        14: '#660000'
      },
      fontColorMap: {
        0: '#4d3d00',
        1: '#665200', 
        2: '#806600',
        3: '#b38f00',
        4: '#cca300',
        5: '#e6b800', 
        6: '#ffcc00', 
        7: '#ffd11a',
        8: '#ffd633',
        9: '#ffdb4d',
        10: '#ffe066',
        11: '#ffe680',
        12: '#ffeb99',
        13: '#fff0b3',
        14: '#fff5cc'        
      },
      style: {
        width: '15%',
        height: '100%',
        minHeight: '70px',
        minWidth: '70px',
        maxHeight: '150px',
        maxWidth: '150px',
        border: '1px solid blue',
        borderRadius: '5px',
        display: 'inline-block',
        position: 'relative',
        align: 'center',
        textAlign: 'center',
        fontSize: '2em',
        backgroundColor: 'grey',
        color: 'black'
      },
      clickedStyle: {
        width: '15%',
        height: '100%',
        minHeight: '70px',
        minWidth: '70px',
        maxHeight: '150px',
        maxWidth: '150px',
        border: '1px solid blue',
        borderRadius: '15px',
        display: 'inline-block',
        position: 'relative',
        align: 'center',
        textAlign: 'center',
        fontSize: '2em',
        backgroundColor: 'red',
        color: 'yellow'      
      }
    }

    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if(!this.props.clicked && this.state.clicked) {
      var clickedStyle = this.state.clickedStyle;
      var clone = clickedStyle;
      var backgroundColor = this.state.colorMap[Math.min(this.props.clickNumber, 14)];
      var fontColor = this.state.fontColorMap[Math.min(this.props.clickNumber, 14)];
      clone.backgroundColor = backgroundColor;
      clone.color = fontColor;
      this.setState({
        clickedStyle: clone,
        clicked: false
      })
      return null;
    }

    if(!!this.props.clicked && !this.state.clicked) {
      var clickedStyle = this.state.clickedStyle;
      var clone = clickedStyle;
      var backgroundColor = this.state.colorMap[Math.min(this.props.clickNumber, 14)];
      var fontColor = this.state.fontColorMap[Math.min(this.props.clickNumber, 14)];
      clone.backgroundColor = backgroundColor;
      clone.color = fontColor;
      this.setState({
        clickedStyle: clone,
        clicked: true
      })
      return null;
    } 
  }




  onClick(e) {
    e.preventDefault();

    if(this.props.clicked === false) {
      var legal = this.props.isLegalMove(this);     
    } else {
      var legal = this.props.isLegalUndo(this);
    }

    if(!!legal) {
      // this.toggleClicked();
      this.props.toggleClicked(this);
    }

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
        <div style={{
          margin: '0',
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }}>
          {this.props.letter}
        </div>
      </div>
    );
  }
}
