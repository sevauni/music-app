import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Slider from '../Slider/Slider'

import "./AudioPlayer.css";



class AudioPlayer extends Component {
    state = {
        playing: false,
        volume: 70,
        currentTrack: null,
        currentTrackLength: 0,
        currentTrackPlayPosition:0,
    };


    clickTest = () => {
        console.log('click!');
    }


    onManualChange = (input) => {
        //console.log(input);
        if (input !== this.state.currentTrackPlayPosition) {
            this.setState(
                {
                    currentTrackPlayPosition: `${input}` 
                }  
            );
            
        }



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
                    <Slider className="track-slider"
                        id="track-slider"
                        max="300"
                        value={this.state.currentTrackPlayPosition}
                        onChange={this.onManualChange}
                    />
               
                </div>


            </div>
        );
    }



}

export default AudioPlayer;