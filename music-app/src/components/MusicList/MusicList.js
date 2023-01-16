import './MusicList.css';

import TrackLine from '../TrackLine/TrackLine';

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
            <TrackLine/>
           
          </div>
        </div>
        <div className='main-body'>
          <div className='next'>
            Next from:
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