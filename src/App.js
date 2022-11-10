
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Components/Pages/Home/Home'
import Especifications from './Components/Pages/Especifications/Especifications'
import Products from './Components/Pages/Products/Products'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact /> 
          <Route path="/especificaciones" element={<Especifications />} exact />    
          <Route path="/productos" element={<Products />} exact />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
