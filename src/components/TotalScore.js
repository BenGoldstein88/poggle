import React from 'react';

export default class TotalScore extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      change: false
    }
  }

  componentDidMount() {
    console.log("remounting")
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.totalScore !== this.props.totalScore) {
      var component = this;
        component.setState({
          change: true,
        })

      setTimeout(function(){
        component.setState({
          change: false,
        })
      }, 2000)
    }
  }

  render() {

    var className = 'total-score';
    var color = 'black';
    if(!!this.state.change) {
      className = 'total-score-transition'
      color = this.props.color;
    }
    return (
      <div style={{
        position: 'absolute',
        top: '0',
        width: '100%',
        marginTop: '-30%'
      }}>
        <p style={{
          display: 'inline-block',
          fontSize: '1.5em',
          position: 'relative',
          width: '65%',
          textAlign: 'center'
        }}>TOTAL SCORE</p>
        <p className={className} style={{color: color}}>{this.props.totalScore}</p>
      </div>
    );
  }
}


// style={{
//           display: 'inline-block',
//           fontSize: '1.5em',
//           position: 'relative',
//           width: '50%',
//           textAlign: 'center'
//         }}
