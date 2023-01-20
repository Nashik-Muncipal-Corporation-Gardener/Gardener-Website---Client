// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider';
import Services from './Components/Services';
import Footer from './Components/Footer';
import ScrollToTop from './Components/scrollToTop';

function App() {
  return (
    <div className="App">
    <ScrollToTop/>
      <Slider/>
      <Services/> 
   
      {/* <Signup/> */}
      {/* <GrievanceForm/> */}
    </div>
  );
}

export default App;
