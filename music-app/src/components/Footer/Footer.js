import React, { Component } from 'react';

import RightPart from '../RightPart/RightPart';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

import './Footer.css';

class Footer extends Component {

    state = {
        volume: 50,
        mute: false
    };

    onChange = (input) => {
        console.log(input);
    }

    onVolumeChange = (input) => {

        const volume = input[1];
        const mute = input[1] < 4 ? true : false;

        if (input[1] !== this.state.volume) {
            this.setState(
                {
                    volume: volume,
                    mute: mute
                }
            );
        }
    }




    onVolumeChange = (input) => {

        const volume = input[1];

        const mute = input[1] < 4 ? true : false;

        if (input[1] !== this.state.volume) {
            this.setState(
                {
                    volume: volume,
                    mute: mute
                }
            );
        }
    }



    onMute = () => {
        this.setState(
            {
                mute: !this.state.mute
            }
        );
    }





    render() {

        const { volume, mute } = this.state;
        const showVolume = !mute ? volume : 0;

        return (
            <footer className="footer">
                <div className='left-part'>
                    <div className='current-song'></div>
                    <div className='song-title'>Song Title</div>
                    <div className='band-name'>Band Name</div>
                    <span className="icon-like"></span>
                </div>
                <div className='center-part'>
                    <AudioPlayer volume={volume} mute={mute} />
                </div>
                <RightPart
                    onVolumeChange={this.onVolumeChange}
                    volumeValue={showVolume}
                    onVolumeMute={this.onMute}
                    volumeMuteValue={false} />
            </footer>
        );
    }
}

export default Footer;