import React from 'react';

export default class SubmitWordButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: '80%',
        width: '75%',
        margin: '0 auto',
        position: 'relative',
        textAlign: 'center',
        backgroundColor: 'lightgrey'
      } 
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
  	e.preventDefault();

  	this.props.submitWord();

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

    var className = "pt-card pt-elevation-4 pt-interactive "
    return (
      <div style={this.state.style} className={className} onClick={this.onClick}>
        SUBMIT WORD
      </div>
    );
  }
}
