import React, { Component } from 'react';

import RightPart from '../RightPart/RightPart';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './Footer.css';

class Footer extends Component {

    state = {
        volume: 50,
        mute: false
    };


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

    leftCornerRender(tracksInfo) {
        if (this.props.info.tracksInfo !== null) {
            const { author,  trackName, icon } = this.props.info.tracksInfo[this.props.info.currentTrackId];
            return (
                <div className='left-part'>
                    <div className='current-song'>
                        <img src={icon} width="100%" alt={trackName} />
                    </div>
                    <div className='song-title'>{trackName}</div>
                    <div className='band-name'>{author}</div>
                    <span className="icon-like">
                        <div className='overlay-like'>
                            <p>Save to Your Library</p>
                        </div>
                    </span>
                </div>
            )




        } else {
            return (
                <div className='left-part'>
                    <div className='current-song'>
                    </div>
                    <div className='song-title'></div>
                    <div className='band-name'></div>
                    <span className="icon-like">
                        <div className='overlay-like'>
                            <p>Save to Your Library</p>
                        </div>
                    </span>
                </div>
            )


        }





    }

    render() {

        const { volume, mute } = this.state;
        const { info } = this.props;
        const showVolume = !mute ? volume : 0;
        const leftPart = this.leftCornerRender(this.props.info.tracksInfo);

        return (
            <footer className="footer">

                {leftPart}
                <div className='center-part'>
                    <AudioPlayer volume={volume} mute={mute} info={info} onTrackChange={this.props.onTrackChange} onPlayChange={this.props.onPlayChange}/>
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