import './MusicList.css';

import React, { Component } from 'react';

class MusicList extends Component {
    render() {
        return (
            <main className="main">
        <div className='main-header'>
          <div className='header-queue'>Queue</div>
          <div className='now-playng'>
            <div className='np-title'>Now playng</div>
            <div className="song-items">
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
          </div>
        </div>
        <div className='main-body'></div>
      </main>
        );
    }
}

export default MusicList;