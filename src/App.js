import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'; 
import CountryName from './CountryName';
import CountryList from './CountryList';
import Navbar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandDescription from './BrandDescription';

function App() {

  return (
    <div className="h-100 bg-dark ">
    
    <Router>
      <div className="App">
      <Navbar/>
          <Routes>
                 <Route exact path='/' element={< CountryName />}></Route>
                 <Route path='/:country' element={< CountryList />}></Route>
                 <Route  path='/Brand/*' element={<BrandDescription />}></Route>

          </Routes>
      </div>
       
    </Router>
</div>
  );
}

export default App;
