import React, { Component } from 'react';
import LoaderService from '../LoadService/LoadService';

import './MusicList.css';

class MusicList extends Component {

  state = {
    tracksLoaded: false
  }


  loaderService = new LoaderService('http://localhost:3004/');

  componentDidMount() {

    if (!this.state.tracksLoaded) {
      this.loaderService.getTrackList('tracks')
        .then(result => {
          console.log(result);
          this.setState(
            {
              tracksLoaded: true
            }
          );
        });
    }
  }




  render() {



    return (
      <main className="main">
        <div className='main-header'>
          <div className='header-queue'>Queue</div>
          <div className='now-playng'>
            <div className='np-title'>Now playng</div>
            <div className="song-items">
              <div className="song-left">
                <span className="icon-play"></span>
                <div className='current-song-player'></div>
                <div className='np-song-title'>Song Title</div>
                <div className='np-band-name'>Band Name</div>
              </div>
              <div className="song-right">
                <div className="album-title">Album Title</div>
                <span className="icon-like"></span>
                <div className="time">3:08</div>
                <span className="icon-dots"></span>
              </div>
            </div>
          </div>
        </div>
        <div className='main-body'>
          <div className='next'>
            Next from:
            <span className='current-song-title'>Current Song</span>
          </div>
          <div className='list-of-songs'>
            <div className="song-line">
              <div className="song-left">
                <span className="icon-play"></span>
                <div className='current-song-player'></div>
                <div className='np-song-title'>Song Title</div>
                <div className='np-band-name'>Band Name</div>
              </div>
              <div className="song-right">
                <div className="album-title">Album Title</div>
                <span className="icon-like"></span>
                <div className="time">3:08</div>
                <span className="icon-dots"></span>
              </div>
            </div>

            <div className="song-line">
              <div className="song-left">
                <span className="icon-play"></span>
                <div className='current-song-player'></div>
                <div className='np-song-title'>Song Title</div>
                <div className='np-band-name'>Band Name</div>
              </div>
              <div className="song-right">
                <div className="album-title">Album Title</div>
                <span className="icon-like"></span>
                <div className="time">3:08</div>
                <span className="icon-dots"></span>
              </div>
            </div>
            <div className="song-line">
              <div className="song-left">
                <span className="icon-play"></span>
                <div className='current-song-player'></div>
                <div className='np-song-title'>Song Title</div>
                <div className='np-band-name'>Band Name</div>
              </div>
              <div className="song-right">
                <div className="album-title">Album Title</div>
                <span className="icon-like"></span>
                <div className="time">3:08</div>
                <span className="icon-dots"></span>
              </div>
            </div>
            <div className="song-line">
              <div className="song-left">
                <span className="icon-play"></span>
                <div className='current-song-player'></div>
                <div className='np-song-title'>Song Title</div>
                <div className='np-band-name'>Band Name</div>
              </div>
              <div className="song-right">
                <div className="album-title">Album Title</div>
                <span className="icon-like"></span>
                <div className="time">3:08</div>
                <span className="icon-dots"></span>
              </div>
            </div>
            <div className="song-line">
              <div className="song-left">
                <span className="icon-play"></span>
                <div className='current-song-player'></div>
                <div className='np-song-title'>Song Title</div>
                <div className='np-band-name'>Band Name</div>
              </div>
              <div className="song-right">
                <div className="album-title">Album Title</div>
                <span className="icon-like"></span>
                <div className="time">3:08</div>
                <span className="icon-dots"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default MusicList;