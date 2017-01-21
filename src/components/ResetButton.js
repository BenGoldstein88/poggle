import React from 'react';

export default class ResetButton extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();

    this.props.resetGame();
  }

  render() {
    return (
      <div onClick={this.onClick} style={{
        position: 'relative',
        height: '50px',
        backgroundColor: 'red',
        color: 'white',
        width: '90%',
        borderRadius: '5px',
        textAlign: 'center'
      }} className={'pt-interactive pt-card'}>
        <div style={{
        	margin: '0',
        	position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '50%',
          transform: 'translate(-50%, -50%)'
        }} >
        	RESET GAME
        </div>
      </div>

    );
  }
}
