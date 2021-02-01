import React, { useState, useEffect } from "react";
import axios from 'axios';
import virus from "../../Images/virus-icon.png";

import LoadingAnimation from "../loadingAnimation/LoadingAnimation";


function CoronaBaner(props){

    const [response_object, setResponse_object] = useState({});
    const [covid_data, setCovidData] = useState({});
    const [didgetNews, chnageDidGetNews] = useState(false);


    // Similar to componentDidMount and componentDidUpdate:
  const  getCovidData = async () =>{

    const reqt = await axios.get('https://damp-brushlands-70035.herokuapp.com/newsapi/categories/corona', { 
        headers:{
          'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
             'auth-token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwZGFjYmE4NGQ3NzZlNDg2NTBjZjciLCJpYXQiOjE2MDc1ODU0NzZ9.7ZNuggciEK7p9EtmBJESVQJtLIbCl_uVc3G-tyk3qVo',
        } 
    }).then( async (response) => { 
      if(response.status === 200){

          setCovidData(response.data.covidData[0]);

        setResponse_object(response.data);
        chnageDidGetNews(true);
        // Success.
      }
    }) 
      .catch((err) => { 
        // Some Error
    })
  }


    useEffect(  () => {
        // Get Data for Covid Banner.
        getCovidData();
    },[]);


    if(didgetNews){
        return (
            <>
                <div className="coronavirus_banner">
                    <a  title="coronavirus">
                        <div className="container pl-0 pr-0">
    
                            <div className="v_b_left">
                                <div className="c_b_title">
                                    <div className="coro_icone">
                                        <img src={virus}/>
                                    </div>
    
                                    <div className="vb_left_box">
                                        <div className="cc_tttxt">
                                            <span className="c_red">CORONA</span>
                                            <span className="p_green">VIRUS</span>
                                            <span className="c_c">IN PAKISTAN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
    
                            <div className="v_b_center">
                                <div className="c_b_deth_cases">
                                    <span className="vb_right_number">New Cases</span>
                                    <span className="vb_right_text">{covid_data.New_Cases}</span>
                                </div>
    
                                <div className="c_b_deth_cases">
                                    <span className="vb_right_number">New Deaths</span>
                                    <span className="vb_right_text">{covid_data.New_Deaths}</span>
                                </div>
    
                                <div className="c_b_deth_cases">
                                    <span className="vb_right_number">Positivity Rate</span>
                                    <span className="vb_right_text">{covid_data.Positive_Rate}</span>
                                </div>
    
    
                                <div className="c_b_deth_cases">
                                    <span className="vb_right_number">Active Cases</span>
                                    <span className="vb_right_text">{covid_data.Active_Cases}</span>
                                </div>
    
                                <div className="c_b_deth_cases c_b_tc">
                                    <span className="vb_right_number">Total Cases</span>
                                    <span className="vb_right_text">{covid_data.Total_Cases}</span>
                                </div>
    
                                <div className="c_b_deth_cases c_b_recovered_cases">
                                    <span className="vb_right_number">Recovered</span>
                                    <span className="vb_right_text">{covid_data.Recovered}</span>
                                </div>
    
                                <div className="c_b_deth_cases c_b_confirmed_cases">
                                    <span className="vb_right_number">Total Deaths</span>
                                    <span className="vb_right_text">{covid_data.Total_Deaths}</span>
                                </div>
                            </div>
    
    
                        </div>
                    </a>
                </div>
            </>
          );

    }else{
        // We did not have Covid data yet.
        return(
            <>
            </>
        )
    }

    
}

export default CoronaBaner;
