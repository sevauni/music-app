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
              {/* <img src="./home-svgrepo-com.svg" alt="home" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span>Home</span>
            </a>
          </div>
          <div className='search'>
            <a href="#">
              <img src="./search-svgrepo-com.svg" alt="search" />
              <span>Search</span>
            </a>
          </div>
          <div className='library'>
            <a href="#">
              <img src="./library-svgrepo-com.svg" alt="library" />
              <span>Your library</span>
            </a>
          </div>
        </div>
        <div className='dop-nav'>
          <div className='playlist'>
            <a href="#">
              <img src="./add-svgrepo-com.svg" alt="add playlist" />
              <span>Create Playlist</span>
            </a>
          </div>
          <div className='liked-songs'>
            <a href="#">
              <img src="./heart-like-svgrepo-com.svg" alt="liked songs" />
              <span>Liked Songs</span>
            </a>
          </div>
        </div>
      </nav>
      <main className="main">main</main>
      <footer className="footer">footer</footer>
    </div>




  );
}

export default App;
