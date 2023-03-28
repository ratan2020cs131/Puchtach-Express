import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import CheckPNR from './component/CheckPNR';
import SearchTrains from './component/SearchTrains';
import TrainStatus from './component/TrainStatus';
import CheckFare from './component/CheckFare';
import Footer from './component/Footer';

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
