import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Home from './components/Home';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
   <HeroSection />
   <Home />
   <HomePage/>
   <Footer /> 
    </div>
  );
}

export default App;
