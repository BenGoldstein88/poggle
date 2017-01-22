import React from 'react';

export default class CurrentWord extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        height: '75%',
        width: '100%',
        minHeight: '150px',
        margin: '0 auto',
        position: 'relative',
        textAlign: 'center'
      },
      className: 'current-word',
      transition: false
    }
    // this.activateCSSTransition = this.activateCSSTransition.bind(this);
  }

// componentWillUpdate(nextProps, nextState) {
//   if(nextProps.currentWord === '' && this.props.currentWord !== '' && this.state.className === 'current-word') {
//     this.activateCSSTransition();
//   }
// }

// activateCSSTransition() {
//   this.setState({
//     className: this.state.className + ' current-word-transition'
//   })
//   this.setState({
//     className: 'current-word'
//   })
// }

  render() {
    var className = this.state.className;
    var color = this.props.colorMap[Math.min(this.props.numVisitedTiles, 14)]
    return (
      <div style={this.state.style} className={className} >
        <p style={{
          fontSize: '1.5em',
          marginTop: '2%'
        }}> CURRENT WORD </p>
      	<p className={className} style={{
          marginTop: '2%',
          fontSize: '3em',
          color: color
        }}>{this.props.currentWord.toUpperCase()}</p>
      </div>
    );
  }
}
