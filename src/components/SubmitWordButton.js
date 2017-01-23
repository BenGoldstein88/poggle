import React from 'react';

export default class SubmitWordButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: 'lightgrey',
        color: 'black'
        // WebkitTouchCallout: 'none',
        // WebkitUserSelect: 'none',
        // khtmlUserSelect: 'none',
        // MozUserSelect: 'none',
        // msUserSelect: 'none',
        // userSelect: 'none'  
      } 
    }

    this.onClick = this.onClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onClick(e) {
  	e.preventDefault();

  	this.props.submitWord();

  }

  handleKeyPress(e) {
    console.log("e: ", e);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props) {
      var style = this.state.style;
      var backgroundColor = this.props.colorMap[Math.min(this.props.numVisitedTiles, 14)];
      var fontColor = this.props.fontColorMap[Math.min(this.props.numVisitedTiles, 14)];
      style.backgroundColor = backgroundColor;
      style.color = fontColor;
      var clone = style;
      this.setState({
        style: style
      })
   }

  }

  render() {

    var className = "pt-card pt-elevation-4 pt-interactive submit-word-button"
    return (
      <div onKeyPress={this.handleKeyPress} style={this.state.style} className={className} onClick={this.onClick}>
        SUBMIT WORD
      </div>
    );
  }
}
