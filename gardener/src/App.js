// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider';
import Services from './Components/Services';
import Signup from './Components/Signup';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/footer';
import ScrollToTop from './Components/scrollToTop';

function App() {
  return (
    <div className="App">
<NavigationBar />
    <ScrollToTop/>
      <Slider/>
      <Services/> 
      <Footer/>
   
      {/* <Signup/> */}
      {/* <GrievanceForm/> */}
    </div>
  );
}

export default App;
