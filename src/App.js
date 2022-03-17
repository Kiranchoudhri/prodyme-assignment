
import './App.css';
import Sidenavbar from './Components/Sidenavbar';
import Productdetail from './Components/Productdetail';


function App() {
  return (
      <div className="App">
      <div className = "sideNav"><Sidenavbar /></div>
      <div className = "productDetail"><Productdetail /></div>
      
    </div>
  );
}

export default App;
