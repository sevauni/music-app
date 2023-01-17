import './App.css';
import Navigation from './components/Navigation/Navigation';
import MusicList from './components/MusicList/MusicList';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import LoaderService from './components/LoadService/LoadService';


import React, { Component } from 'react';

class App extends Component {


  state = {
    tracksInfo: null,
    currentTrackId: 0,
    currentStatus: false,
    infoLoaded: false
  }

  loaderService = new LoaderService('http://localhost:3000/');

  componentDidMount() {
    if (this.state.infoLoaded === false) {
      this.loaderService.getTrackList('tracks.json')
        .then(result => {
          this.setState(
            {
              tracksLoaded: true,
              tracksInfo: result,
              infoLoaded: true
            }
          );
        })
        .catch();

    }
  }


  onTrackChange = (nextTrack) => {

    if (nextTrack > this.state.tracksInfo.length - 1) nextTrack = 0;
    if (nextTrack < 0) nextTrack = this.state.tracksInfo.length - 1;

    console.log(nextTrack);
    this.setState(
      {
        currentTrackId: nextTrack,
      }
    );

  }


  onPlayChange = (forceStatus = false) => {
    forceStatus = Boolean(Number(forceStatus));
    if (forceStatus) {
      this.setState(
        {
          currentStatus: true
        }
      );
    } else {
      this.setState(
        {
          currentStatus: !this.state.currentStatus
        }
      );
    }



  }

  render() {
    return (

      <div className="wrapper">
        <Navigation />
        <div className='logo'>
          <a href="/#"><img src="./music-bars-svgrepo-com-white.svg" className="img-logo" alt="logo"></img></a>
          <a href="/#"><div>Music</div></a>
        </div>
        <MusicList info={this.state} onTrackChange={this.onTrackChange} onPlayChange={this.onPlayChange} />
        <SideBar />
        <Footer info={this.state} onTrackChange={this.onTrackChange} onPlayChange={this.onPlayChange} />
      </div>

    );
  }
}

export default App;


