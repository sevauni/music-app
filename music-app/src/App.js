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
    status: {
      currentTrackId: 0,
      currentStatus: false
    }
  }

  loaderService = new LoaderService('http://localhost:3004/');

  componentDidMount() {
    this.loaderService.getTrackList('tracks')
      .then(result => {

        this.setState(
          {
            tracksLoaded: true,
            tracksInfo: result
          }
        );
        //console.log(this.state);
      })
      .catch(console.log("Fetch Catch"));
  }
  onTrackChange(nextTrack) {

    this.setState(
      {
        status: {
          currentTrackId: nextTrack,
          currentStatus: false
        }
      }
    );
  }
  onPlayChange(nextStatus) {

    this.setState(
      {
        status: {
          currentStatus: nextStatus
        }
      }
    );
  }




  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <div className='logo'>
          <a href="/#"><img src="./music-bars-svgrepo-com-white.svg" alt="logo"></img></a>
          <a href="/#"><div>Music</div></a>
        </div>
        <MusicList info={this.state} />
        <SideBar />
        <Footer info={this.state} />
      </div>

    );
  }
}

export default App;


