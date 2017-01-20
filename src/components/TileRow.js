import React from 'react';

export default class TileRow extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
    	style: {
    		height: '19%',
    		width: '100%',
        minWidth: '400px',
        maxWidth: '800px',
        minHeight: '70px',
        maxHeight: '150px'
    	}
    }
  }

  render() {
  	var tiles = this.props.tiles;
    return (
      <div style={this.state.style} >
      	{tiles}
      </div>
    );
  }
}
