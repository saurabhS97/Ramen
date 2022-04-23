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

function BrandDescription(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const { ListData, brand } = state; 
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    let data = (ListData.length ==0 ) ? <div><p>sadas</p></div>:  
    <div className="container">
    <div className="row justify-content-center">
    {ListData.map((i,index) =>
    i.Brand==brand?
    <div className="card m-3" style={{width: "50%", height:"40%"}} key ={i.Brand + index} style={{width: "50%", height:"40%", textAlign:"left"}} >
        <div className="card-body text-dark blockquote text-justify text-left font-weight-bold">
        <p className="card-text">The Brand is  {i.Brand}</p>
        <p className="card-text">The Variety is {i.Variety}</p>
        <li className="card-text">Style : {i.Style}</li>
        <li className="card-text"> Available in : {i.Country}</li>
        <li className="card-text">Rating : {i.Stars}</li>
        <li className="card-text">The ranking: {i["Top Ten"]}</li>
        </div>
    </div>
    :null
    )}
    </div>
    </div>

return(
<div className="p-3 mb-2  text-white">
{data}
</div>
    
)
}

export default BrandDescription;