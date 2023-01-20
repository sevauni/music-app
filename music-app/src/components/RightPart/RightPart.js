import React, { Component } from 'react';

import './RightPart.css'

import SliderRange from '../SliderRange/SliderRange';


class RightPart extends Component {
//const muteIconClass = 
    render() {
        const muteButtonClassName =  !this.props.mute ? 'icon-sound-min' : 'icon-sound-mute';
        return (
            <div className='right-part'>
                <span className="icon-microphone ir"></span>
                <span className="icon-queue ir"></span>
                <span className="icon-laptop ir"></span>
                <div className='sound'>
                    <span onClick={this.props.onVolumeMute} id='sound-mute' className={muteButtonClassName}></span>
                    <SliderRange max='100'  value={this.props.volumeValue} onInput={this.props.onVolumeChange} />
                </div>
            </div>
        );
    }
}

export default RightPart;