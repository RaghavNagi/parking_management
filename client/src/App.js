import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import SignUp from './components/SignUp'
import ParkingSpace from './components/ParkingSpace';

function App() {
  return (
    
    <div className="App">
     <Navbar/>
     {/* <SignUp/> */}
     <ParkingSpace/>
     <Fotter/>
     
    </div>
    
  );
}

export default App;
