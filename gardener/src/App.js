// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavigationBar';
import Footer from './Components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider';
import Services from './Components/Services';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Services/> 
      <Footer/>
    </div>
  );
}

export default App;
