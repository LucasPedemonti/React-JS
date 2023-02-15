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
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
//Components
import Nav from './components/Nav/Nav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductContainer from './components/ProductContainer/ProductContainer';
 


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MotherBoard" element={<MotherBoard />} />
          <Route path="/Notebook" element={<NoteBook />} />
          <Route path="/PlacasDeVideo" element={<PlacasDeVideo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <div>
        <ItemListContainer />
      </div>
      <div>
        <ProductContainer />
      </div>
    </Router>     
  );
}

export default App;
