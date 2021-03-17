// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

 
    constructor() {
        super();
    
        this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            }
          }
        };
      }
      //here we set the initial state 


    haandlechangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720'
                }
            }
        })
    }
    //we made this to alter the state
    //we first used the setState
    //then we called on settings and used the spread operator 
    //to make a new array with the new resolution

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.setting, 
                bitrate: 12
            }
        })
    }
    //we made this to alter the state
    //we first used the setState
    //then we called on settings and used the spread operator 
    //here we updated the bitrate


    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleChangeBitrate}>
                    Change Bitrate
                </button>
                <button className="resolution" onClick={this.haandlechangeResolution}>
                    Change Resolution
                </button>
            </div>
        )
    }
    //we make two buttons, BOTH with the onClick event
    //this event will then target the resolution and bitrate
    //function when clicked and in turn change them from the
    //initial state


}

export default YouTubeDebugger;