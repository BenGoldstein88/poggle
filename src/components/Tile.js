import React from 'react';

export default class Tile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	clicked: false,
      style: {
        backgroundColor: 'white',
        color: 'black'
      },
      clickedStyle: {
        backgroundColor: 'red',
        color: 'yellow'

      }
    }

    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if(!this.props.clicked && this.state.clicked) {
      // var clickedStyle = this.state.clickedStyle;
      var style = {};
      var backgroundColor = this.props.colorMap[Math.min(this.props.clickNumber, 14)];
      var fontColor = this.props.fontColorMap[Math.min(this.props.clickNumber, 14)];
      style.backgroundColor = backgroundColor;
      style.color = fontColor;
      this.setState({
        clickedStyle: style,
        clicked: false
      })
      return null;
    }

    if(!!this.props.clicked && !this.state.clicked) {
      // var clickedStyle = this.state.clickedStyle;
      var style = {};
      var backgroundColor = this.props.colorMap[Math.min(this.props.clickNumber, 14)];
      var fontColor = this.props.fontColorMap[Math.min(this.props.clickNumber, 14)];
      style.backgroundColor = backgroundColor;
      style.color = fontColor;
      this.setState({
        clickedStyle: style,
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
    var className = 'pt-card pt-interactive tile';
    if(!!this.props.clicked) {
      style = this.state.clickedStyle;
      className += ' pt-elevation-4 '
    } else {
      style = this.state.style;
      className += ' pt-elevation-0 '
    }

    return (
      <div onClick={this.onClick} className={className} style={style}>
        <div style={{
          margin: '0',
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '-50%',
          // opacity: '1',
          transform: 'translate(-50%, -50%)'
          // WebkitTouchCallout: 'none',
          // WebkitUserSelect: 'none',
          // khtmlUserSelect: 'none',
          // MozUserSelect: 'none',
          // msUserSelect: 'none',
          // userSelect: 'none'  
        }}>
          {this.props.letter.toUpperCase()}
        </div>
      </div>
    );
  }
}
