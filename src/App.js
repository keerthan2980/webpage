import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home.jsx";
import NavigationBar from './Components/NavigationBar/NavigationBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import About from './Pages/About/About.jsx';
 import Contactus from './Pages/Contactus/Contactus.jsx';
// import Packages from './Pages/Packages/Packages.jsx';
import Packages from "./Pages/Packages/Packages2.jsx"



function App() {
  return (
    <div className='App'>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
