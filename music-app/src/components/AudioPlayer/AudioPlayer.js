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
        currentTrack: null,
        currentTrackLengthSec: 500,
        currentTrackLengthMillis: 500,
        currentTrackPlayPositionSec: 0,
        currentTrackPlayPositionMillis: 0,
        currentTrackPath: './music.mp3',
    };


    millisToTimeString = (inputMillis) => {
        return new Date(inputMillis).toISOString().slice(14, 19);
    }

    onClickPlayButton = () => {
        if (this.state.playing) {
            this.setState(
                {
                    playing: false,
                    playStatus: 'STOPPED',
                }
            );
        } else {
            this.setState(
                {
                    playing: true,
                    playStatus: 'PLAYING',
                }
            );
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



        // const currentTrackPlayPositionMillis = input.position;

        // if (currentTrackPlayPositionMillis !== this.state.currentTrackPlayPositionMillis) {
        //     this.setState(
        //         {
        //             currentTrackPlayPositionMillis: currentTrackPlayPositionMillis
        //         }
        //     );
        // }



    }




    componentDidMount() {


    }

    render() {
        const {
            playStatus,
            loop,
            currentTrackPath,
            currentTrackLengthMillis,
            currentTrackPlayPositionMillis,
        } = this.state;

        let volume = this.props.mute ? 0 : this.props.volume;

        return (
            <>


                <Sound
                    autoLoad
                    url={currentTrackPath}
                    playStatus={playStatus}
                    onLoading={this.onTrackLoading}
                    position={currentTrackPlayPositionMillis}
                    onPlaying={this.onTrackPlaying}
                    volume={volume}
                    loop={loop}
                />
                
                <div className="hochu-umeret">
                <span className="icon-shuffle-1-svgrepo-com ic"><div className='overlay-shuffle rs'><p>Enable shuffle</p></div></span>
                <span className="icon-play-and-pause ic"><div className='overlay-play-and-pause rs'><p>Previous</p></div></span>

                <span className="icon-play-circle ic" onClick={this.onClickPlayButton}>
                        <div className='overlay-play rs'><p>Play</p></div>
                </span>

                <span className="icon-play-and-pause2 ic"><div className='overlay-play-and-pause2 rs'><p>Next</p></div></span>

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