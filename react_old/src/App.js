import './App.css';

function App() {
  return (


    <div className="wrapper">
      <header className="header">
        <div className="arrow-nav">
          <div className='arrow'><img className='left' src="./left.svg" alt="" /></div>
          <div className='arrow'><img className='right' src="./right.svg" alt="" /></div>
        </div>
        <div className="buttons">
          <button>LOG IN</button>
        </div>
      </header>
      <div className='logo'>
        <a href="#"><img src="./music-bars-svgrepo-com-white.svg" alt="logo"></img></a>
        <a href="#"><div>Music</div></a>
      </div>
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
              <div className="song-right"></div>
            </div>
          </div>
        </div>
        <div className='main-body'></div>
      </main>
      <footer className="footer">
        <div className='left-part'>
          <div className='current-song'></div>
          <div className='song-title'>Song Title</div>
          <div className='band-name'>Band Name</div>
          <span className="icon-like"><div className='overlay-like'><p>Save to Your Library</p></div></span>
        </div>
        <div className='center-part'>
          <span className="icon-shuffle-1-svgrepo-com ic"><div className='overlay-shuffle rs'><p>Enable shuffle</p></div></span>
          <span className="icon-play-and-pause ic"><div className='overlay-play-and-pause rs'><p>Previous</p></div></span>
          <span className="icon-play-circle ic"><div className='overlay-play rs'><p>Play</p></div></span>
          <span className="icon-play-and-pause2 ic"><div className='overlay-play-and-pause2 rs'><p>Next</p></div></span>
          <span className="icon-repeat-one ic"><div className='overlay-repeat rs'><p>Enable repeat</p></div></span>
          <div id="music-line">
            <div>0:18</div>
            <div className="line"></div>
            <div className='time'>3:15</div>
          </div>
        </div>
        <div className='right-part'>
          <span className="icon-microphone ir"><div className='overlay-microphone rs'><p>Lyrics</p></div></span>
          <span className="icon-queue ir"><div className='overlay-queue rs'><p>Queue</p></div></span>
          <span className="icon-laptop ir"><div className='overlay-laptop rs'><p>Connect to a device</p></div></span>
          <div className='sound'>
            <span id='sound-mute' className="icon-sound-min"><div className='overlay-sound-min rs'><p>Mute</p></div></span>
            <div className='sound-line'></div>
          </div>
        </div>
      </footer>
    </div>




  );
}

export default App;
