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
<div className="p-3 mb-2 bg-info text-white">
<button className="btn btn-success btn-block rounded-pill text-uppercase fs-4 text-left mx-3 text-sm-left" style={{ textAlign:"left"}} onClick={() => navigate(-1)}>Back</button>
<button className="btn btn-success btn-block rounded-pill text-uppercase fs-4"  onClick={() =>navigate('/')}>Ramen Data</button>
</div>    
)
}

export default NavBar;