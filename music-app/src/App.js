import './App.css';
import Navigation from './components/Navigation/Navigation';
import MusicList from './components/MusicList/MusicList';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

window.soundManager.setup({debugMode: false}); //disable soundmanager logs








function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <div className='logo'>
        <a href="/#"><img src="./music-bars-svgrepo-com-white.svg" alt="logo"></img></a>
        <a href="/#"><div>Music</div></a>
      </div>
      <MusicList />
      <SideBar />
      <Footer />
    </div>




  );
}

export default App;
