import React, { Component } from 'react';

import './RightPart.css'

import SliderRange from '../SliderRange/SliderRange';


class RightPart extends Component {

    render() {
        return (
            <div className='right-part'>
                <span className="icon-microphone ir"></span>
                <span className="icon-queue ir"></span>
                <span className="icon-laptop ir"></span>
                <div className='sound'>
                    <span onClick={this.props.onVolumeMute} id='sound-mute' className="icon-sound-min"></span>
                    <SliderRange max='100' value={this.props.volumeValue} onInput={this.props.onVolumeChange} />
                </div>
            </div>
        );
    }
}

export default RightPart;