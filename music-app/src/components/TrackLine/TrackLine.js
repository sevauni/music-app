import React, { Component } from 'react';
import './TrackLine.css';


class TrackLine extends Component {
    render() {
        return (
            <div className="song-line">
                <div className="song-left">
                    <span class="icon-play"></span>
                    <div className='current-song-player'></div>
                    <div className='np-song-title'>Song Title</div>
                    <div className='np-band-name'>Band Name</div>
                </div>
                <div className="song-right">
                    <div className="album-title">Album Title</div>
                    <span class="icon-like"></span>
                    <div className="time">3:08</div>
                    <span class="icon-dots"></span>
                </div>
            </div>
        );
    }
}

export default TrackLine;