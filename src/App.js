import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Home from "./components/Home";
import HomePage from "./pages/HomePage";
import MotionWrapper from "./components/MotionWrapper";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <MotionWrapper delay={0.3}>
        <Home />
      </MotionWrapper>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
