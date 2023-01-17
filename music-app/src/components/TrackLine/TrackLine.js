import React, { Component } from 'react';
import './TrackLine.css';





class TrackLine extends Component {



    render() {
        let playIconClass;
        if (!this.props.first) {
            playIconClass = 'icon-play';
        } else {
            playIconClass = (this.props.playStatus) ? 'icon-pause' : 'icon-play';
        }

        const { albumName, author, duration, trackName, icon } = this.props.info;
        return (
            <div className="song-line" onClick={() => {
                if (this.props.first) {
                    this.props.onPlayChange(this.props.trackId);
                } else {
                    this.props.onTrackChange(this.props.trackId);
                }

            }}>
                <div className="song-left">
                    <span onClick={() => {
                        if (this.props.first) {
                            this.props.onPlayChange(this.props.trackId);
                        } else {
                            this.props.onTrackChange(this.props.trackId);
                            this.props.onPlayChange(true);
                        }
                    }
                    }
                        className={playIconClass}></span>
                    <div className='current-song-player'>
                        <img src={icon} width="100%" alt={trackName} />
                    </div>
                    <div className='np-song-title'>{trackName}</div>
                    <div className='np-band-name'>{author}</div>
                </div>
                <div className="song-right">
                    <div className="album-title">{albumName}</div>
                    <span className="icon-like"></span>
                    <div className="time">{duration}</div>
                    <span className="icon-dots"></span>
                </div>
            </div>
        );
    }
}

export default TrackLine;