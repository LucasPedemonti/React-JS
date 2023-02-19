//Estilo App
import './App.css';
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from './Pages/Home/Home';
import MotherBoard from "./Pages/MotherBoard/MotherBoard";
import NoteBook from "./Pages/NoteBook/NoteBook";
import PlacasDeVideo from "./Pages/PlacasDeVideo/PlacasDeVideo";
import Contact from "./Pages/Contact/Contact";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
//Components
import TitleContainer from './components/TitleContainer/TitleContainer'
import Nav from './components/Nav/Nav';




const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <TitleContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motherBoard" element={<MotherBoard />} />
          <Route path="/notebook" element={<NoteBook />} />
          <Route path="/placasDeVideo" element={<PlacasDeVideo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes> 
         
      </div>     
    </Router>
       
  );
};

export default App;
