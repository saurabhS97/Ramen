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
import { Button } from 'bootstrap';

function NavBar(){
    const navigate = useNavigate();
return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand px-3" onClick={() => navigate(-1)}>BACK</a>
      <button className="nav-link btn navbar-brand btn-block rounded-pill fs-4" onClick={() =>navigate('/')}><span class="sr-only">Noodles Webapp</span></button>
</nav>

)
}

export default NavBar;