import React from 'react';

export default class ShuffleBoardButton extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.resetCurrentWord();
    this.props.onClick();
  }

  render() {
    return (
      <div onClick={this.onClick} style={{
        position: 'absolute',
        height: '50px',
        background: 'linear-gradient(to right, #ff8080, #b30000)',
        color: 'white',
        width: '40%',
        borderRadius: '15px',
        textAlign: 'center',
        left: '5%',
        marginRight: '50px',
        // margin: '0 auto',
        display: 'inline-block'
      }} className={'pt-interactive pt-card shuffle-board-button'}>
        <div style={{
        	margin: '0',
        	position: 'absolute',
          top: '50%',
          left: '50%',
          marginRight: '50%',
          transform: 'translate(-50%, -50%)',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          khtmlUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none'  
        }} >
        	SHUFFLE BOARD
        </div>
      </div>

    );
  }
}