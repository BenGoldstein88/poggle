import React from 'react';

export default class TotalScore extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        position: 'absolute',
        bottom: '0',
        width: '100%'
      }}>
        <p style={{
          display: 'inline-block',
          fontSize: '1.5em',
          position: 'relative',
          width: '50%',
          textAlign: 'center'
        }}>TOTAL SCORE</p>
        <p style={{
          display: 'inline-block',
          fontSize: '1.5em',
          position: 'relative',
          width: '50%',
          textAlign: 'center'
        }}>{this.props.totalScore}</p>
      </div>
    );
  }
}
