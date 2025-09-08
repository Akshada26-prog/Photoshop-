import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./Home";
import Login from './Login';
import Aboutpg from './Regs';
import Navbar from './Navbar';
// import Services from './PhotoAlbum';
import Regs from './Regs';
import Forgot from './Forgot';
import CONTINUE from './Home';
import PhotoAlbum from './PhotoAlbum';
import Collagegrid from './Collagegrid';
import Flower from './Flower';
import Couple from './Couple';
import Nature from './Nature';
import Cars from './Cars';
import Street from './Street';
import Snapchat from './Snapchat';
// import Go To Login from './Login';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
         <Route exact path="/Regs" element={<Regs />} /> 
         <Route exact path="/Forgot" element={<Forgot />} />
        {/* <Route exact path="/Services" element={<Services />} /> */}
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Go To Login" element={<Login />} />
        {/* <Route exact path='/Navbar' element={<Navbar/>}/> */}
        <Route exact path='/PhotoAlbum' element={<PhotoAlbum/>}/>
        <Route exact path='/Collagegrid' element={<Collagegrid/>}/>
        <Route exact path='/flower' element={<Flower/>}/>
        <Route exact path='/Couple' element={<Couple />} />
        <Route exact path='/Nature' element={<Nature />} />
        <Route exact path='/Cars' element={<Cars />} />
        <Route exact path='/Street' element={<Street />} />
        <Route exact path='/Snapchat' element={<Snapchat />} />










      </Routes>
    </>
  );
};

export default App;
