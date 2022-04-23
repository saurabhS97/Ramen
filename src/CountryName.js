
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getList }from './redux/listSlice'

import { useNavigate } from 'react-router-dom';


function CountryName(props) {
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.lists)

let listData=value
// const [listData, setListData] = useState([]);

  React.useEffect(() => {
  //  dispatch(setValue([""]))
   dispatch(getList())
   },[]);


   
  let countryList = listData.map((i)=>i.Country)
  let cList = [...new Set(countryList)]
  const navigate = useNavigate();
  
   const countryRoute=(i)=>{
      navigate('/'+i , { state: { ListData: listData, country: i } });
   }

  let countryNameList = listData.length ==0? <div />: 
   <div className="container">
     <div className="row justify-content-center p-3" >
       {cList.map((i,index)=><div className="col-md-3" key={index}>
         <button type="button" key={i.Brand + index} className="btn btn-primary btn-block m-5 rounded-pill text-uppercase fs-5" style={{width:"100%", height:"50%"}} onClick={_=>countryRoute(i)}>{i}</button>
         </div>)}
      </div>      
    </div>


  return (
    <div className="h-100 bg-dark ">
        <div>
        {countryNameList}
        </div>
    </div>      

  );
}

export default CountryName;
