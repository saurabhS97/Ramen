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
<div class="p-3 mb-2 bg-info text-white">
<button class="btn btn-success" onClick={() =>navigate('/')}>Ramen Data</button>
</div>
    
)
}

export default NavBar;