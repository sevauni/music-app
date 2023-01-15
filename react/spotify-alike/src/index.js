import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      {/* <App /> */}
      <AudioPlayer  />
  </React.StrictMode>
);
