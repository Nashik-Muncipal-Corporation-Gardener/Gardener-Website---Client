// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider';
import Services from './Components/Services';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">

      <Slider/>
      <Services/> 
   
      {/* <Signup/> */}
      {/* <GrievanceForm/> */}
    </div>
  );
}

export default App;
