import './MusicList.css';

import TrackLine from '../TrackLine/TrackLine';

import React, { Component } from 'react';


import './MusicList.css';

class MusicList extends Component {

  state = {
    tracksLoaded: false,
    tracksInfo: null
  }





  render() {
    //console.log(this.props)
    const { tracksInfo, currentTrackId } = this.props.info;
    let trackList = null;
    let trackFirst = null;
    if (tracksInfo !== null) {



      trackFirst = <TrackLine trackId="0" info={tracksInfo[currentTrackId]} key='trackIdList-0' onTrackChange={this.props.onTrackChange} onPlayChange={this.props.onPlayChange} first />

      trackList = tracksInfo.map((item, index) => {
        if (currentTrackId === index) return null;
        return (
          <TrackLine trackId={index} key={`trackIdList-${index}`} info={tracksInfo[index]} onTrackChange={this.props.onTrackChange} onPlayChange={this.props.onPlayChange} />
        )
      });
    }

    return (
      <main className="main" >
        <div className='main-header'>
          <div className='header-queue'>Queue</div>
          <div className='now-playng'>
            <div className='np-title'>Now playng</div>
            {trackFirst}
          </div>
        </div>
        <div className='main-body'>
          <div className='next'>
            Next from:&nbsp;
            <span className='current-song-title'>Current Song</span>
          </div>
          <div className='list-of-songs'>
            {trackList}
          </div>
        </div>
      </main>
    );
  }
}

export default MusicList;