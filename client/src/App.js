import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import ParkingSpace from './components/ParkingSpace';
import Wallet from './components/Wallet';

function App() {
  return (
    
    <div className="App">
     <Navbar/>
     {/* <SignUp/> */}
     {/* <ParkingSpace/> */}
     <Wallet/>
     <Footer/>
     
    </div>
    
  );
}

export default App;
