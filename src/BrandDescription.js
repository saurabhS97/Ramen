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

    console.log("brand",brand)
    console.log("ListData",ListData)

    let data = (ListData.length ==0 ) ? <div><p>sadas</p></div>:  
    <div class="container">
    <div class="row justify-content-center">
    {ListData.map((i,index) =>
    i.Brand==brand?
    <div class="card m-3" style={{width: "50%", height:"40%"}} key ={i.Brand + index}>
        <div class="card-body text-dark">
        <p class="card-text ">Brand</p>
        <p class="card-text">Brand : {i.Brand}</p>
        <p class="card-text">Variety : {i.Variety}</p>
        <p class="card-text">Style : {i.Style}</p>
        <p class="card-text"> Country : {i.Country}</p>
        <p class="card-text">Stars : {i.Stars}</p>
        <p class="card-text">Top Ten : {i["Top Ten"]}</p>
        </div>
    </div>
    :null
    )}
    </div>
    </div>

return(
<div class="p-3 mb-2  text-white">
{data}
</div>
    
)
}

export default BrandDescription;