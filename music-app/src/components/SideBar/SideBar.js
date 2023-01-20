import './SideBar.css';

import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <nav>
            <div className="main-nav">
              <div className='home'>
                <a href="#">
                  <span className="icon-home ic"></span>
                  <span>Home</span>
                </a>
              </div>
              <div className='search'>
                <a href="#">
                  <span className="icon-search ic"></span>
                  <span>Search</span>
                </a>
              </div>
              <div className='library'>
                <a href="#">
                  <span className="icon-library ic"></span>
                  <span>Your library</span>
                </a>
              </div>
            </div>
            <div className='dop-nav'>
              <div className='playlist'>
                <a href="#">
                  <span className="icon-playlist ic"></span>
                  <span>Create Playlist</span>
                </a>
              </div>
              <div className='liked-songs'>
                <a href="#">
                  <span className="icon-heart ic"></span>
                  <span>Liked Songs</span>
                </a>
              </div>
            </div>
          </nav>
        );
    }
}

export default SideBar;