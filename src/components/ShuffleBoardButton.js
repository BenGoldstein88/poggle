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
        position: 'relative',
        height: '50px',
        backgroundColor: 'gold',
        color: 'white',
        width: '40%',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '0 auto',
        display: 'inline-block'
      }} className={'pt-interactive pt-card'}>
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