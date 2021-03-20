import React from 'react';

class YouTubeDebugger extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       timesClicked: 0,
    };
  }
  //here we set the timesClicked initial state to 0

  handleClick = () => {
    this.setState(initialState => ({
      timesClicked: initialState.timesClicked+1
    }))
  }
  //same as the previous lab, we use setState, we pass in a name 
  //for the initial state, we set that to the timesClicked plus 1
  //this is turn changes the state everytime it is clicked.

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
  //we make a button with a onClick event listener, 
  //that will trigger a function that handles the click 
  //the button inside will display the states current amount of times clicked
}

export default YouTubeDebugger;