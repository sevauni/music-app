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


    millisToTimeString = (inputMillis) => {
        return new Date(inputMillis).toISOString().slice(14, 19);
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

    componentDidMount() {


    }

    render() {
        const {
            playStatus,
            loop,
            currentTrackPath,
            currentTrackLengthSec,
            currentTrackLengthMillis,
            currentTrackPlayPositionSec,
            currentTrackPlayPositionMillis,
        } = this.state;

        let volume = this.props.mute ? 0 : this.props.volume;


        this.millisToTimeString(54000000);


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

                <span className="icon-shuffle-1-svgrepo-com"></span>
                <span className="icon-play-and-pause"></span>

                <span
                    className="icon-play-circle"
                    onClick={this.onClickPlayButton}
                />

                <span className="icon-play-and-pause2"></span>

                <span
                    className="icon-repeat-one"
                    onClick={this.onClickLoopButton}
                />



                <div id="music-line">

                    {this.millisToTimeString(currentTrackPlayPositionMillis)}
                    
                    <SliderRange max={currentTrackLengthMillis} value={currentTrackPlayPositionMillis} onInput={this.onTrackSearch} />
                    {this.millisToTimeString(currentTrackLengthMillis)}
                </div>
            </>
        )
    }



}


export default AudioPlayer;