import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Carousal from './Pages/Home/Carousel';
import Footer from './Pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Service/Services';
import Update from './Pages/update/Update';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
