import React, { useState, useEffect } from "react";
// import Card from "../components/Cards/Crad";
import Carousel  from "react-elastic-carousel";
import axios from 'axios';
import Card from "../components/Cards/Crad";

// // for accessing global store
// import {useDispatch} from 'react-redux'
// import {login} from "../actions/loginAction";


const breakPoints = [
  {width: 1,   itemsToShow: 1},
  {width: 500, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4}

];

function Home(props) {
  // get data from Local storage
  let udata = localStorage.getItem('userloginInfo');
  udata = JSON.parse(udata);
  let temp_array = udata.userinterests.split(",")
  let I0 = temp_array[0];
  let I1 = temp_array[1];
  let I2 = temp_array[2];
  let I0_Array = [];
  let I1_Array = [];
  let I2_Array = [];

  let number_cols = "col-lg-12 col-sm-12 h-100 pl-2 pt-2 pb-2 pr-2 mr-2 ml-2"


  // const [res_success, setResSuccess] = useState(0);
  // const [toal_news, setTotalNews] = useState(0);
  // const [news_array, setNewsArray] = useState([]);

  const [didgetNews, chnageDidGetNews] = useState(false);
  const [response_object, setResponse_object] = useState({});
  const [i0array, seti0array] = useState([]);
  const [i1array, seti1array] = useState([]);
  const [i2array, seti2array] = useState([]);
  

  // Similar to componentDidMount and componentDidUpdate:
  const  getRecomendedNews = async () =>{

    const reqt = await axios.get('https://damp-brushlands-70035.herokuapp.com/newsapi/recomendedNews', { 
        params: { userinterests: udata.userinterests },
        headers:{
          'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
             'auth-token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwZGFjYmE4NGQ3NzZlNDg2NTBjZjciLCJpYXQiOjE2MDc1ODU0NzZ9.7ZNuggciEK7p9EtmBJESVQJtLIbCl_uVc3G-tyk3qVo',
        } 
    }).then( async (response) => { 
      if(response.status === 200){
        // setResSuccess(response.data.success);
        // setTotalNews(response.data.totalNews);
        // setNewsArray(response.data.NewsArray);
         
          I0_Array = response.data.NewsArray.filter(news => {return news.Label === I0});
          I0_Array = I0_Array.reverse();
          seti0array(I0_Array);
          localStorage.setItem('I0_Array_l', JSON.stringify(I0_Array));
          

          I1_Array = response.data.NewsArray.filter(news => {return news.Label === I1});
          I1_Array = I1_Array.reverse();
          seti1array(I1_Array);         
          localStorage.setItem('I1_Array_l', JSON.stringify(I1_Array));

          I2_Array = response.data.NewsArray.filter(news => {return news.Label === I2});
          I2_Array = I2_Array.reverse();
          seti2array(I2_Array);
          localStorage.setItem('I2_Array_l', JSON.stringify(I2_Array));

        setResponse_object(response.data);
        chnageDidGetNews(true);
        console.log("======== ok =========");

      }
    }) 
      .catch((err) => { 
        console.log("======== Error ===========");
        console.log(err) 
    })
  }

  useEffect(  () => {
    console.log("Use Effect");
    getRecomendedNews();
  },[]);

  setInterval(getRecomendedNews, 60000);
  
  let a_0 = localStorage.getItem('I0_Array_l');
  let a_1 = localStorage.getItem('I1_Array_l');
  let a_2 = localStorage.getItem('I2_Array_l');


  if(a_0 && a_1 && a_2){

    a_0 = JSON.parse(a_0);
    a_1 = JSON.parse(a_1);
    a_2 = JSON.parse(a_2);
    
    
    return(
      <>
        <div className="container">
        <div className="world-news">

            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex position-relative  float-left">
                  <h3 className="section-title">{I0}</h3>
                </div>
              </div>
            </div>

            <div className="row w-100 h-25">
              <Carousel className="single_news_container hvr-underline-from-center" breakPoints={breakPoints}>
                {a_0.map( (news, index) => (
                  <Card  key={news._id} news={news} number_cols={number_cols} ></Card>
                ) )}
              </Carousel>
            </div>

        </div>
      </div>


      <div className="container">
        <div className="world-news">

            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex position-relative  float-left">
                  <h3 className="section-title">{I1}</h3>
                </div>
              </div>
            </div>

            <div className="row w-100 h-25">
              <Carousel className="single_news_container hvr-underline-from-center" breakPoints={breakPoints}>
                {a_1.map( (news, index) => (
                     <Card key={news._id} news={news} number_cols={number_cols} ></Card>
                ) )}
              </Carousel>
            </div>
            
        </div>
      </div>

      <div className="container">
        <div className="world-news">

            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex position-relative  float-left">
                  <h3 className="section-title">{I2}</h3>
                </div>
              </div>
            </div>
            <div className="row w-100 h-25">
              <Carousel className="single_news_container hvr-underline-from-center" breakPoints={breakPoints}>
                {a_2.map( (news, index) => (
                  <Card key={news._id} news={news} number_cols={number_cols} ></Card>
                ) )}
              </Carousel>
            </div>
            
        </div>
      </div>
      
    </>

    )
  }

  else if(didgetNews){
      return (
      <>
        <div className="container">
        <div className="world-news">

            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex position-relative  float-left">
                  <h3 className="section-title">{I0}</h3>
                </div>
              </div>
            </div>

            <div className="row w-100 h-25">
              <Carousel className="single_news_container hvr-underline-from-center" breakPoints={breakPoints}>
                {i0array.map( (news, index) => (
                  <Card  key={news._id} news={news} number_cols={number_cols} ></Card>
                ) )}
              </Carousel>
            </div>

        </div>
      </div>


      <div className="container">
        <div className="world-news">

            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex position-relative  float-left">
                  <h3 className="section-title">{I1}</h3>
                </div>
              </div>
            </div>

            <div className="row w-100 h-25">
              <Carousel className="single_news_container hvr-underline-from-center" breakPoints={breakPoints}>
                {i1array.map( (news, index) => (
                     <Card key={news._id} news={news} number_cols={number_cols} ></Card>
                ) )}
              </Carousel>
            </div>
            
        </div>
      </div>

      <div className="container">
        <div className="world-news">

            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex position-relative  float-left">
                  <h3 className="section-title">{I2}</h3>
                </div>
              </div>
            </div>
            <div className="row w-100 h-25">
              <Carousel className="single_news_container hvr-underline-from-center" breakPoints={breakPoints}>
                {i2array.map( (news, index) => (
                  <Card key={news._id} news={news} number_cols={number_cols} ></Card>
                ) )}
              </Carousel>
            </div>
            
        </div>
      </div>
      
    </>
      )

  }
  else{
      return(
        <div> we dont have any thing</div>
      )
  }
}

export default Home;
