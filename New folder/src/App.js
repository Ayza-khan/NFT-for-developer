
import './App.css';
import Banner from './Banner';
import Collectors from './Collectors';
import Footer from './Footer';
import GamesList from './GamesList';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Banner/>
      <GamesList/>
      <Collectors/>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
