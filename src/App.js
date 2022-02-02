import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

import BAYC from './pages/BAYC'
import Ingenesis from './pages/Ingenesis'
import InTemple from './pages/InTemple'
import InVoid from './pages/InVoid'
import LatestShows from './pages/LatestShows'
import MostPopular from './pages/MostPopular'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      
      <Navbar />
    
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="/latestshows" element={<LatestShows />} />
            <Route path="/bayc" element={<BAYC />} />
            <Route path="/ingenesis" element={<Ingenesis />} />
            <Route path="/intemple" element={<InTemple />} />
            <Route path="/invoid" element={<InVoid />} />
            <Route path="/MostPopular" element={<MostPopular />} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
