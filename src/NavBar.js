import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory,
  useNavigate,
  useLocation
} from 'react-router-dom';

function NavBar(){
    const navigate = useNavigate();

return(
<div>
<p>Ramne Data</p>
<button onClick={() =>navigate('/')}>Home</button>
</div>
    
)
}

export default NavBar;