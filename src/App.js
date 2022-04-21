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

function App() {
  return (
    <Router>
      <div class="App">
      <Navbar/>

          <Routes>
                 <Route exact path='/' element={< CountryName />}></Route>
                 <Route path='/:country' element={< CountryList />}></Route>
          </Routes>
      </div>
       
    </Router>

  );
}

export default App;
