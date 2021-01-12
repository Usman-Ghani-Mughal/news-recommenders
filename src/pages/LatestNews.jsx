import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../components/Cards/Crad";

// // for accessing global store
// import {useDispatch} from 'react-redux'
// import {login} from "../actions/loginAction";

function LatestNews(props) {

  let news_array = [];
  let number_cols = "col-lg-4 col-sm-4 h-100 mb-2 mt-2 singel_news single_news_container hvr-underline-from-center";

  const [didgetNews, chnageDidGetNews] = useState(false);
  const [response_object, setResponse_object] = useState({});
  const [newsArray, setNewsArray] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  const  getLatestNews = async () =>{
    console.log("grt latest");
    const reqt = await axios.get('https://damp-brushlands-70035.herokuapp.com/newsapi/latestnews', { 
        headers:{
          'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
             'auth-token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwZGFjYmE4NGQ3NzZlNDg2NTBjZjciLCJpYXQiOjE2MDc1ODU0NzZ9.7ZNuggciEK7p9EtmBJESVQJtLIbCl_uVc3G-tyk3qVo',
        } 
    }).then( async (response) => { 
      if(response.status === 200){
         
          news_array = response.data.NewsArray.reverse();
          setNewsArray(news_array);

        setResponse_object(response.data);
        // store data in local
        localStorage.setItem("latest_news", JSON.stringify(news_array));
        chnageDidGetNews(true);
        console.log("========= got data ==========");

      }
    }) 
      .catch((err) => { 
        console.log("======== Error ===========");
        console.log(err) 
    })
    console.log("done latest");
  }

  useEffect(  () => {
      console.log("Use Effect block");
      getLatestNews();
    // let latestnews_t = localStorage.getItem("latest_news");

    // if(latestnews_t){
    //   latestnews_t = JSON.parse(latestnews_t);
    //   console.log(latestnews_t);
    //   setNewsArray(latestnews_t);
    //   // chnageDidGetNews(true);
    //   console.log("Use Effect if block");
    // }
    // else{
    //   console.log("Use Effect else block");
    //   getLatestNews();
    // }
    
  },[]);

  setInterval(getLatestNews, 3600000);

  let n_a_l = localStorage.getItem('latest_news');

  if(n_a_l){
    n_a_l = JSON.parse(n_a_l);

    return(
      <>
        <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center">
                  <h1 className="text-center mt-5">
                    Latest News
                  </h1>
                      <p className="text-secondary fs-15">
                        A good newspaper is a nation talking to itself.
                      </p>
                  <span className="fs-13 font-weight-bold">Arthur Miller</span>
                </div>
                <h5 className="text-muted font-weight-medium mb-3">Latest News</h5>
              </div>
            </div>

            <div className="world-news">
              <div className="row w-100 h-25">

                {n_a_l.map( (news, index) => (
                    <Card key={news._id} news={news} number_cols={number_cols}></Card>
                ) )}
                
              </div> 
            </div>
        </div>
      </>
    )


  }

  else if(didgetNews){
    return(
      <>
        <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center">
                  <h1 className="text-center mt-5">
                    Latest News
                  </h1>
                      <p className="text-secondary fs-15">
                        A good newspaper is a nation talking to itself.
                      </p>
                  <span className="fs-13 font-weight-bold">Arthur Miller</span>
                </div>
                <h5 className="text-muted font-weight-medium mb-3">Latest News</h5>
              </div>
            </div>

            <div className="world-news">
              <div className="row w-100 h-25">

                {newsArray.map( (news, index) => (
                    <Card key={news._id} news={news} number_cols={number_cols}></Card>
                ) )}
                
              </div> 
            </div>
        </div>
      </>
    )
  }else{
    return (
      <>
        <div >
          
        </div>
      </>
    );
  }

  
}

export default LatestNews;
