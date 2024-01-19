import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import PrivateRoutes from './routes/PrivateRoutes';
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Modal from 'react-modal'
import Home from './pages/Home'
const { io } = require("socket.io-client");

const App = () => {

  const socket = io("http://localhost:4000");

  socket.on("connect", () => {
    console.log(socket.id);
  });
  
  socket.on("disconnect", () => {
    console.log('disconnected'); 
  });

  Modal.setAppElement("#root");

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App

