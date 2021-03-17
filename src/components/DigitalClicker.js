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
//we then create this handle function that uses
//initialState, then gets the timesClicked and sets it to 
//the initialState that calls on the timesClicked and adds 1
//that is then set to timesClicked
  

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
//here we create a button that handles a click which 
//calls on handleClick when clicked
//the buttons name is calling on timesClicked and will show a number




}

  





export default YouTubeDebugger;