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
    //since we are only changing one value we need to de-compose
    //the settings object. so we use the spread operator 
    //we then use it on the video object as well to de-compose that one
    //and last, we set the new resolution value .."720"

    handleChangeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.setting, 
                bitrate: 12
            }
        })
    }
    //same process but we only have to decompose the settings object
    //once we have that, set the new bitrate value.. 12
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
    //this event will then target the resolution and bitrate function
}

export default YouTubeDebugger;