import './App.css';

function App() {
  return (


    <div className="wrapper">
      <header className="header">header</header>
      <div className='logo'>
        <a href="#"><img src="./music-bars-svgrepo-com-white.svg" alt="logo"></img></a>
        <a href="#"><div>Music</div></a>
      </div>
      <nav>
        <div className="main-nav">
          <div className='home'>
            <a href="#">
              <span class="icon-home ic"></span>
              <span>Home</span>
            </a>
          </div>
          <div className='search'>
            <a href="#">
              <span class="icon-search ic"></span>
              <span>Search</span>
            </a>
          </div>
          <div className='library'>
            <a href="#">
              <span class="icon-library ic"></span>
              <span>Your library</span>
            </a>
          </div>
        </div>
        <div className='dop-nav'>
          <div className='playlist'>
            <a href="#">
              <span class="icon-playlist ic"></span>
              <span>Create Playlist</span>
            </a>
          </div>
          <div className='liked-songs'>
            <a href="#">
              <span class="icon-heart ic"></span>
              <span>Liked Songs</span>
            </a>
          </div>
        </div>
      </nav>
      <main className="main">main
        <span class="icon-heart"></span>
      </main>
      <footer className="footer">footer</footer>
    </div>




  );
}

export default App;
