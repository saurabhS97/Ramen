import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function CountryName(props) {


const [listData, setListData] = useState([]);

  React.useEffect(() => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json')
    .then(response => response.json())
    .then(data => setListData(data));
   },[]);


   
  let countryList = listData.map((i)=>i.Country)
  let cList = [...new Set(countryList)]
  const navigate = useNavigate();
  
   const countryRoute=(i)=>{
      navigate('/'+i , { state: { ListData: listData, country: i } });
   }

  let countryNameList = listData.length ==0? <div />: 
   <div class="container">
     <div class="row justify-content-center p-3" >
       {cList.map((i,index)=><div class="col-md-3">
         <button type="button" class="btn btn-primary btn-block m-3" style={{width:"100%", height:"80%"}} onClick={_=>countryRoute(i)}>{i}</button>
         </div>)}
      </div>      
    </div>


  return (
    <div class="h-100 bg-dark ">
        <div>
        {countryNameList}
        </div>
    </div>      

  );
}

export default CountryName;
