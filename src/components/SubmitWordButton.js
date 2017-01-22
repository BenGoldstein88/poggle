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
        fontSize: '1.5em',
        backgroundColor: 'lightgrey',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        khtmlUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'  
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

    var className = "pt-card pt-elevation-4 pt-interactive "
    return (
      <div onKeyPress={this.handleKeyPress} style={this.state.style} className={className} onClick={this.onClick}>
        SUBMIT WORD
        <input type={'hidden'} onKeyPress={this.handleKeyPress} autoFocus={true}/>
      </div>
    );
  }
}
