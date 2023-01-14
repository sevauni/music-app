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
      <main className="main">main
        <span className="icon-heart"></span>
        <span className="icon-like">sdsd</span>
        <span className="icon-shuffle-1-svgrepo-com"></span>
      </main>
      <footer className="footer">
        <div className='left-part'>
          <div className='current-song'></div>
          <div className='song-title'>Song Title</div>
          <div className='band-name'>Band Name</div>
          <span className="icon-like"></span>
        </div>
        <div className='center-part'></div>
        <div className='right-part'>
        <span className="icon-microphone"></span>
        <span className="icon-queue"></span>
        <span className="icon-laptop"></span>
        <span className="icon-sound-min"></span>
        <div className='sound-line'></div>
        </div>
      </footer>
    </div>




  );
}

export default App;
