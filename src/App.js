import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Carousal from './Pages/Home/Carousel';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Carousal />
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Footer />
    </div>
  );
}

export default App;
