import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CheckPNR from './components/CheckPNR';
import SearchTrains from './components/SearchTrains';
import TrainStatus from './components/TrainStatus';
import CheckFare from './components/CheckFare';
import Footer from './components/Footer';

const Routing = () => {
  return(
    <Routes>

      <Route exact path='/'
        element={<Home/>}>
      </Route>

      <Route path='/checkpnr'
        element={<CheckPNR/>}>
      </Route>

      <Route path='/trainstatus'
        element={<TrainStatus/>}>
      </Route>

      <Route path='/searchtrain'
        element={<SearchTrains/>}>
      </Route>

      <Route path='/checkfare'
        element={<CheckFare/>}>
      </Route>
      
    </Routes>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  )
}

export default App;
