import './MusicList.css';

import TrackLine from '../TrackLine/TrackLine';

import React, { Component } from 'react';

class MusicList extends Component {
  render() {
    return (
      <main className="main">
        <div className='main-header'>
          <div className='header-queue'>Queue</div>
          <div className='now-playng'>
            <div className='np-title'>Now playng</div>
            <TrackLine/>
          </div>
        </div>
        <div className='main-body'>
          <div className='next'>
            Next from:&nbsp;
            <span className='current-song-title'>Current Song</span>
          </div>
          <div className='list-of-songs'>
           <TrackLine/>
            
          </div>
        </div>
      </main>
    );
  }
}

export default MusicList;