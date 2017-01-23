import React from 'react';
import TopLogoImage from '../assets/Poggle-logo.png';

export default class TopLogo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	style: {
    		height: '10%',
    		width: '95%',
        marginBottom: '2%',
        marginTop: '-1%'
    	}
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div style={this.state.style}>
      	<img onClick={this.onClick} style={{
          width: '50%',
          height: 'auto',
          margin: 'auto',
          display: 'block',
          maxHeight: '100px',
          maxWidth: '225px',
          transform: 'translate(-40%, 0%)'
        }} src={TopLogoImage} />

      </div>
    );
  }
}
