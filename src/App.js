import './App.css';
import Home from './component/Home';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navbar/>
        <Routes>
          
          {/* <Route path="/" element={<Navbar/>}/> */}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
