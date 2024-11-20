import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';
import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);





  return (
    
    <div className="App">
      <h1>{message}</h1>
     <Navbar/>
     <SignUp/>
     <ParkingSpace/>
     <Wallet/>
     <Footer/>
    </div>
    
  );
}

export default App;
