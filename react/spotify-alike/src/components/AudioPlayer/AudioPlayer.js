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
        currentTrackLength: 500,
        currentTrackPlayPosition: 0,
    };


    testClick = (input) => {
        console.log(input);
    }

    clickTest = (e) => {
        console.log(e.target.value);
        console.log("click");
    }


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
                        className="slider slider-track"
                        defaultValue={[0, 0]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                        onInput={(value) => { this.testClick(value) }}
                        max={this.state.currentTrackLength}
                    />
                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Mute</Button>
                    <RangeSlider
                        className="slider slider-volume"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                        onInput={(value) => { this.testClick(value) }}
                    />
                </div>
            </div>
        );
    }



}




export default AudioPlayer;