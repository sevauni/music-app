import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


import "./AudioPlayer.css";



class AudioPlayer extends Component {
    state = {
        playing: false,
        volume: 70,
        currentTrack: null,
        currentTrackLength: 0,
        currentTrackPlayPosition: 0,
    };





    render() {
        return (
            <div className='player-bottom-test'>
                <div className='audioplayer-container-test'>
                    <span id="current-time" className='time'>0:00</span>
                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Shuffle</Button>
                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Prev</Button>
                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Play</Button>
                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Next</Button>
                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Enable Repeat</Button>
                    <span id="duration" className='time'>0:00</span>
                    <RangeSlider
                        className="slider"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                </div>
            </div>
        );
    }



}




export default AudioPlayer;