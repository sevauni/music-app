import './App.css';
import Navigation from './components/Navigation/Navigation';
import MusicList from './components/MusicList/MusicList';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <div className='logo'>
        <a href="/#"><img  className='img-logo' src="./music-bars-svgrepo-com-white.svg" alt="logo"></img></a>
        <a href="/#"><div className='music'>Music</div></a>
      </div>
      <MusicList />
      <SideBar />
      <Footer />
    </div>




  );
}

export default App;
