import React, { Component } from 'react';

import Sound from 'react-sound-2';
import SliderRange from '../SliderRange/SliderRange';




import "./AudioPlayer.css";


class AudioPlayer extends Component {



    state = {
        playing: false,
        playStatus: 'STOPPED',
        loop: false,
        volumeMute: false,
        currentTrack: 0,
        currentTrackLengthMillis: 500,
        currentTrackPlayPositionMillis: 0,
    };


    millisToTimeString = (inputMillis) => {
        return new Date(inputMillis).toISOString().slice(14, 19);
    }

    boolToStatus = (playingBool) => {
        if (playingBool) {
            return 'PLAYING'
        } else {
            return 'PAUSED'
        }
    }

    onClickLoopButton = () => {
        this.setState(
            {
                loop: !this.state.loop
            }
        );

    }

    onTrackLoading = (input) => {
        const currentTrackLengthMillis = input.duration;

        if (currentTrackLengthMillis !== this.state.currentTrackLengthMillis) {
            this.setState(
                {
                    currentTrackLengthMillis: currentTrackLengthMillis
                }
            );
        }
    }

    onTrackPlaying = (input) => {
        const currentTrackPlayPositionMillis = input.position;

        if (currentTrackPlayPositionMillis !== this.state.currentTrackPlayPositionMillis) {
            this.setState(
                {
                    currentTrackPlayPositionMillis: currentTrackPlayPositionMillis
                }
            );
        }
    }

    onTrackSearch = (input) => {
        // input[1]
        const currentTrackPlayPositionMillis = input[1];

        this.setState(
            {
                currentTrackPlayPositionMillis: currentTrackPlayPositionMillis
            }
        );


    }






    getAudioPath() {
        if (this.props.info.tracksInfo !== null) {
            const { path } = this.props.info.tracksInfo[this.props.info.currentTrackId];
            return path;
        }
        return null;
    }


    componentDidUpdate() {
        if (this.props.info.currentTrackId !== this.state.currentTrack) {
            this.setState(
                {
                    currentTrack: this.props.info.currentTrackId,
                    currentTrackPlayPositionMillis: 0
                }
            );
        }
    }


    render() {

        const {
            loop,
            currentTrackLengthMillis,
            currentTrackPlayPositionMillis,
        } = this.state;

        const { currentTrackId } = this.props.info;
        //console.log(currentTrackId);
        let volume = this.props.mute ? 0 : this.props.volume;
        const playStatus = this.boolToStatus(this.props.info.currentStatus);
        const path = this.getAudioPath();
        const playButtonClass = this.props.info.currentStatus ? 'icon-pause-circle ic' : 'icon-play-circle ic';
//icon-pause-circle icon-play-circle


        return (
            <>
                <Sound
                    autoLoad
                    url={path}
                    playStatus={playStatus}
                    onLoading={this.onTrackLoading}
                    position={currentTrackPlayPositionMillis}
                    onPlaying={this.onTrackPlaying}
                    volume={volume}
                    loop={loop}
                    onFinishedPlaying={e=>{this.props.onTrackChange(currentTrackId + 1)}}
                />

                <div className="icons-player-align">
                    <span className="icon-shuffle-1-svgrepo-com ic">
                        <div className='overlay-shuffle rs'>
                            <p>Enable shuffle</p>
                        </div>
                    </span>

                    <span
                        className="icon-play-and-pause ic"
                        onClick={e => {
                            this.props.onPlayChange(true);
                            //console.log(currentTrackId);
                            this.props.onTrackChange(currentTrackId - 1);
                        }}
                    >
                        <div className='overlay-play-and-pause rs'><p>Previous</p></div></span>

                    <span
                        className={playButtonClass}
                        onClick={e => {
                            this.props.onPlayChange();
                        }}
                    >
                        <div className='overlay-play rs'><p>Play</p></div></span>

                    <span 
                                           onClick={e => {
                                            this.props.onPlayChange(true);
                                            this.props.onTrackChange(currentTrackId + 1);
                                        }}
                    className="icon-play-and-pause2 ic"><div className='overlay-play-and-pause2 rs'><p>Next</p></div></span>

                    <span className="icon-repeat-one ic" onClick={this.onClickLoopButton}>
                        <div className='overlay-repeat rs'><p>Enable repeat</p></div>
                    </span>
                </div>



                <div id="music-line">
                    <div className="time-left"> {this.millisToTimeString(currentTrackPlayPositionMillis)} </div>
                    <SliderRange className="slider-center" max={currentTrackLengthMillis} value={currentTrackPlayPositionMillis} onInput={this.onTrackSearch} />
                    <div className="time-right"> {this.millisToTimeString(currentTrackLengthMillis)} </div>
                </div>
            </>
        )
    }



}


export default AudioPlayer;