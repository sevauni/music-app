import React, { Component } from 'react';

import './RightPart.css'

import SliderRange from '../SliderRange/SliderRange';


class RightPart extends Component {
//const muteIconClass = 
    render() {
        const muteButtonClassName =  !this.props.mute ? 'icon-sound-min' : 'icon-sound-mute';
        return (
            <div className='right-part'>
                <span className="icon-microphone ir"><div className='overlay-microphone rs'><p>Lyrics</p></div></span>
                <span className="icon-queue ir"><div className='overlay-queue rs'><p>Queue</p></div></span>
                <span className="icon-laptop ir"><div className='overlay-laptop rs'><p>Connect to a device</p></div></span>
                <div className='sound'>
                    <span onClick={this.props.onVolumeMute} id='sound-mute' className={muteButtonClassName}> <div className='overlay-sound-min rs'><p>Mute</p></div></span>
                    <SliderRange max='100'  value={this.props.volumeValue} onInput={this.props.onVolumeChange} />
                </div>
            </div>
        );
    }
}

export default RightPart;