import React from 'react';
import TopLogoImage from '../assets/Poggle-logo.png';

export default class TopLogo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    	style: {
    		height: '10%',
    		width: '95%'
    	}
    }
  }

  render() {
    return (
      <div style={this.state.style}>
      	<img style={{
          width: '50%',
          height: '20%',
          margin: 'auto',
          display: 'block'
        }} src={TopLogoImage} />

      </div>
    );
  }
}
