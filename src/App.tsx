import './App.css';
import Header from './components/Header';
import Dragon from './pages/Dragon';
import Footer from './pages/Footer';
import Home from './pages/Home';
import OurProducts from './pages/OurProducts';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';

function App() {
  return (
   <>
    <Header/>
    <Home />
    <OurProducts />
    <Team />
    <Dragon />
    <Roadmap />
    <Footer />
   </>
  );
}

export default App;
