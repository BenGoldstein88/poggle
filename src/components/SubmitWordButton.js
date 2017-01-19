import React from 'react';

export default class SubmitWordButton extends React.Component {

  constructor(props) {
    super(props);


    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
  	e.preventDefault();

  	this.props.submitWord();

  }

  render() {
    return (
      <div>
      	<button onClick={this.onClick}>
      		Submit Word
      	</button>	
      </div>
    );
  }
}
