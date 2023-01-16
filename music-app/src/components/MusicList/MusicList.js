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

    const { tracksInfo } = this.props.info;

    let trackList = null;
    let trackFirst = null;

    if (tracksInfo !== null) {
      trackFirst = <TrackLine info={tracksInfo[0]} key='trackIdList-0' />

      trackList = tracksInfo.map((item, index) => {
        if (index === 0) return null;
        return (
          <TrackLine key={`trackIdList-${index}`} info={tracksInfo[index]} />
        )
      });
    }

    return (
      <main className="main">
        <div className='main-header'>
          <div className='header-queue'>Queue</div>
          <div className='now-playng'>
            <div className='np-title'>Now playng</div>
            {trackFirst}
          </div>
        </div>
        <div className='main-body'>
          <div className='next'>
            Next from:
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