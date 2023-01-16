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
    currentStatus: false
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
      })
      .catch(console.log("Fetch Catch"));
  }


  onTrackChange = (nextTrack) => {

    this.setState(
      {
        currentTrackId: nextTrack,
      }
    );

  }


  onPlayChange = () => {
    this.setState(
      {


        currentStatus: !this.state.currentStatus

      }
    );

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
        <Footer info={this.state} onTrackChange={this.onTrackChange} onPlayChange={this.onPlayChange}/>
      </div>

    );
  }
}

export default App;


