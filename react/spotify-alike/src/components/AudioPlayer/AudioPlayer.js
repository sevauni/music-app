import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import Audio from 'ts-audio';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


import "./AudioPlayer.css";



class AudioPlayer extends Component {
    state = {
        playing: false,
        volume: 0.5,
        volumeMute: false,
        currentTrack: null,
        currentTrackLength: 500,
        currentTrackPlayPosition: 0,
        currentTrackPath: './music.mp3',
    };

    _scale = (number, inMin, inMax, outMin, outMax) => {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }


    // onSongLoaded = (song) => {
    //     console.log(this.rap.audioEl);
    //     song = Math.floor(song.current.duration);
    //     console.log(song);
    //     this.setState({
    //         currentTrackLength: song
    //     });
    // }

    _onVolumeUpdate = (input) => {


        let newVolume = this._scale(input, 0, 100, 0, 1).toFixed(2);


        if (this.state.volume !== newVolume) {
            this.setState({
                volume: newVolume
            });
        }
        return newVolume;
    }

    testClick = (input) => {
        console.log(input);
    }

    clickTest = (e) => {
        console.log(e.target.value);
        console.log("click");
    }

    player = Audio({
        file: './music.mp3',
        loop: false,
        volume: this.state.volume,
        autoPlay: false,
        preload: true,
    });

    componentDidMount() {


    }

    render() {
        return (
            <div className='player-bottom-test'>
                <div className='audioplayer-container-test'>
                    <span id="current-time" className='time'>0:00</span>

                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Shuffle</Button>

                    <Button onClick={() => {
                        console.log(this.player.audioCtx);
                        console.log(this.player.audioCtx.currentTime);
                        this.player.setValueAtTime(33);

                        this.player.audioCtx.currentTime = 8;
                    }}
                     className="buttons-spacing-test" variant="secondary">Prev</Button>

                    <Button onClick={() => {
                        this.player.toggle();
                        console.log(this.player.volume);

                    }} className="buttons-spacing-test" variant="secondary">Play</Button>
                    <Button onClick={this.clickTest} className="buttons-spacing-test" variant="secondary">Next</Button>
                    <Button
                        onClick={this.clickTest}
                        className="buttons-spacing-test"
                        variant="secondary"
                    >Enable Repeat</Button>
                    <span id="duration" className='time'>0:00</span>
                    <RangeSlider
                        className="slider slider-track"
                        defaultValue={[0, 0]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                        onInput={(value) => { this.testClick(value) }}
                        max={this.state.currentTrackLength}
                    />
                    <Button
                        onClick={() => { this.player.volume = 0 }}
                        className="buttons-spacing-test"
                        variant="secondary"
                    >Mute</Button>
                    <RangeSlider
                        className="slider slider-volume"
                        defaultValue={[0, this.state.volume * 100]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                        onInput={(value) => {
                            //this.testClick(value);
                            this.player.volume = this._onVolumeUpdate(value[1]);
                            console.log(this.player.volume);
                        }}
                    />

                </div>
            </div>
        );
    }



}


//this.rap.audioEl.current.duration

export default AudioPlayer;