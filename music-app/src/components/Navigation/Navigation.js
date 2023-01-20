import React, { Component } from 'react';

import './Navigation.css'
import GitHubButton from 'react-github-btn'




class Navigation extends Component {



  render() {


    return (
      <header className="header">
        <div className="arrow-nav">
          <div className='arrow'><img className='left' src="./left.svg" alt="" /></div>
          <div className='arrow'><img className='right' src="./right.svg" alt="" /></div>
        </div>
        <div className="buttonsH">
          <div className="git-buttons">
          <GitHubButton href="https://github.com/sevauni">Follow @sevauni</GitHubButton>
          <GitHubButton href="https://github.com/DariaBab">Follow @DariaBab</GitHubButton>
          </div>
          <div className="buttons">
            <button>LOG IN</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Navigation;