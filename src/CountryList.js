import logo from './logo.svg';
import React, { useState,useMemo,_ } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfiniteScroll from "react-infinite-scroll-component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory,
  useLocation
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CountryList(props) {

  const {state} = useLocation();
  const { ListData, country, picsData } = state; // Read values passed on state
console.log("ListData",ListData)

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let data = (ListData.length ==0 || picsData.length == 0) ? <div />:  <div class="container">
<div class="row justify-content-center">
{ListData.map((i,index) =>
i.Country==country?
<div class = "card m-3" style={{width: "50%"}} key ={i.Brand + index}>
    <img class="card-img-top" src={picsData[randomInteger(0,5)].Image} style={{width:"90%",margin:"2%",height:"40%"}}  alt="Card image" />
    <div class="card-body">
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




return (
    <div class="container">
    <div class="row justify-content-center p-3" >
       
    {data}
 
     </div>      
   </div>     

  );
}

export default CountryList;
