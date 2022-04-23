import logo from './logo.svg';
import React, { useState,useMemo,_ } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch,useSelector } from 'react-redux'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useHistory,
  useLocation
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createStore } from 'redux'
import { useRef } from "react";
import {getPicList }from './redux/picSlice'

function CountryList(props) {
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.picsList)

  const navigate = useNavigate();
  const {state} = useLocation();
  let { ListData, country, picsData } = state;
  const[ListDataRef,setListData] = useState(ListData);
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // const [picsList,setPicsList] = useState([]);
  let picsList=value

  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      
     
      if (Math.abs((document.body.clientHeight - window.scrollY) - document.documentElement.clientHeight) <= 5) {
        var newData = ListDataRef.concat(ListData);

        setListData(newData);
      }
    }
  };
  window.onscroll = onScroll;
  

  React.useEffect(() => {
  setTimeout(function() {
    dispatch(getPicList())
    }, 1000);
  },[]);  



// if(ListDataRef.length > 0){
//   console.log("ListDataRef",document.getElementById("box").getBoundingClientRect().height)
// if (document.getElementById("box").getBoundingClientRect().height<600){
//   var newData = ListDataRef.concat(ListData);
//   console.log("as",newData)
//   console.log("reached bottom 2",newData);

//   setListData(newData);

// }
// }




const routeBrand=(i)=>{
  navigate('/Brand/'+i.Brand, { state: { ListData: ListData, brand: i.Brand } });
}


let data = (ListDataRef.length == 0 ) ? <div />: 

<div className="container" ref={listInnerRef}  id="box" >
<div className="row justify-content-center" >
{ListDataRef.map((i,index) =>
i.Country==country?
<div  onClick={_=>routeBrand(i)} className="card m-3 text-left blockquote" style={{width: "50%", height:"40%", textAlign:"left"}} key ={i.Brand + index}>
 <img className="card-img-top justify-content-center border border-dark " 
    src={ picsList.length == 0? "https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif" 
                          : picsList[randomInteger(0,5)].Image} style={{width:"90%",margin:"5%",height:"40%"}}  alt="Card image" />
    <div className="card-body blockquote text-justify text-left font-weight-bold">
    <li className="card-text text-left">Brand : {i.Brand}</li>
    <li className="card-text">Variety : {i.Variety}</li>
    <li className="card-text">Style : {i.Style}</li>
    <li className="card-text"> Country : {i.Country}</li>
    <li className="card-text">Stars : {i.Stars}</li>
    <li className="card-text">Top Ten : {i["Top Ten"]}</li>
    </div>
</div>
:null
)}
</div>
</div>




return (
    <div className="container">
    <div className="row justify-content-center p-3" >
       
    {data}
 
     </div>      
   </div>     

  );
}

export default CountryList;
