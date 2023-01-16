import React, { Component } from 'react';

import './Navigation.css'




class Navigation extends Component {



  render() {


    return (
      <header className="header">
        <div className="arrow-nav">
          <div className='arrow'><img className='left' src="./left.svg" alt="" /></div>
          <div className='arrow'><img className='right' src="./right.svg" alt="" /></div>
        </div>
        <div className="buttons">
          <button>LOG IN</button>
        </div>
      </header>
    );
  }
}

export default Navigation;