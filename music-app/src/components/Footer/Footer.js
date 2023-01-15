import './Footer.css';

import SliderRange from '../SliderRange/SliderRange';
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className='left-part'>
                    <div className='current-song'></div>
                    <div className='song-title'>Song Title</div>
                    <div className='band-name'>Band Name</div>
                    <span className="icon-like"></span>
                </div>
                <div className='center-part'>
                    <span className="icon-shuffle-1-svgrepo-com"></span>
                    <span className="icon-play-and-pause"></span>
                    <span className="icon-play-circle"></span>
                    <span className="icon-play-and-pause2"></span>
                    <span className="icon-repeat-one"></span>
                    <div id="music-line">
                        0:18
                        <SliderRange startPosition='50'></SliderRange>
                        3:15
                    </div>
                </div>
                <div className='right-part'>
                    <span className="icon-microphone ir"></span>
                    <span className="icon-queue ir"></span>
                    <span className="icon-laptop ir"></span>
                    <div className='sound'>
                        <span id='sound-mute' className="icon-sound-min"></span>
                        <div className='sound-line'></div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;