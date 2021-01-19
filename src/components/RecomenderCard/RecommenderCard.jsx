import React from 'react';
import '../../componentscss/uiheader.css';
import '../../componentscss/recommender_com.css';

import img_5 from "../../Images/star-magazine-5.jpg";
import img_glob from "../../Images/glob.jpg";
import img_6 from "../../Images/star-magazine-6.jpg";
import img_7 from "../../Images/star-magazine-7.jpg";
import img_8 from "../../Images/star-magazine-8.jpg";


function RecommenderCard(props){
    

    return (
        <>

        <div className="editors-news">

        <div className="row">
        <div className="col-lg-3">
            <div className="d-flex position-relative float-left">
            <h3 className="section-title">News you may like</h3>
            </div>
        </div>
        </div>

        <div className="row">
        
        <div className="col-lg-6  mb-5 mb-sm-2">
        <a rel={'external'}  href={"https://"+props.new_2345[1].Link}>
            <div className="position-relative image-hover down_main_image">
            <img
                src={props.new_2345[1].ImagePath}
                className="img-fluid"
                alt="world-news"
            />
            <span className="thumb-title">{props.new_2345[1].Label}</span>
            </div>
            </a>
            <h1 className="font-weight-600 mt-3">
            {/* Google Play is unsportsmanlike, U.S. states likely to argue in potential lawsuit */}
            {props.new_2345[1].News_heading}
            </h1>
            <p className="fs-15 font-weight-normal">
            {/* WASHINGTON (Reuters) - State attorneys general are planning a third lawsuit against Alphabet Inc’s Google, this... */}
            {props.new_2345[1].News_details}
            </p>
        
        </div>
        

        
        <div className="col-lg-6  mb-5 mb-sm-2">
            <div className="row">
            
            <div className="col-sm-6  mb-5 mb-sm-2">
            <a rel={'external'}  href={"https://"+props.new_2345[2].Link}>
                <div className="position-relative image-hover down_other_images">
                <img
                    src={props.new_2345[2].ImagePath}
                    className="img-fluid"
                    alt="world-news"
                />
                {/* <span className="thumb-title">{props.new_2345[2].Label}</span> */}
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                {/* Quetta: 4 Injured In Blast On Sariab Road */}
                {props.new_2345[2].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
                {/* our people were injured in an explosion on Sariab Road in Quetta.  */}
                {props.new_2345[2].News_details}
                </p>
            </div>
            

            <div className="col-sm-6  mb-5 mb-sm-2">
            <a rel={'external'}  href={"https://"+props.new_2345[3].Link}>
                <div className="position-relative image-hover down_other_images">
                <img
                    src={props.new_2345[3].ImagePath}
                    className="img-fluid"
                    alt="world-news"
                />
                {/* <span className="thumb-title">{props.new_2345[3].Label}</span> */}
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                {/* Beetroot Raita: Carve Your Cravings With This Side Dish */}
                {props.new_2345[3].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
                {/* The use of beetroot is very common in the subcontinent */}
                {props.new_2345[3].News_details}
                </p>
            </div>
            </div>

            <div className="row mt-3">
            
            <div className="col-sm-6  mb-5 mb-sm-2">
            <a rel={'external'}  href={"https://"+props.new_2345[4].Link}>
                <div className="position-relative image-hover down_other_images">
                <img
                    src={props.new_2345[4].ImagePath}
                    className="img-fluid"
                    alt="world-news"
                />
                {/* <span className="thumb-title">{props.new_2345[4].Label}</span> */}
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                {/* PIA to appear before London, Malaysian courts over lease payment issue: aviation minister */}
                {props.new_2345[4].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
                {/* PIA officials will appear before a London court on January 22 and before a Malaysian court on January 24 */}
                    {props.new_2345[4].News_details}
                </p>
            </div>
            <div className="col-sm-6">
            <a rel={'external'}  href={"https://"+props.new_2345[5].Link}>
                <div className="position-relative image-hover down_other_images">
                <img
                    src={props.new_2345[5].ImagePath}
                    className="img-fluid"
                    alt="world-news"
                />
                {/* <span className="thumb-title">{props.new_2345[5].Label}</span> */}
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                {/* New Pakistan chief selector introduces data-based criteria */}
                    {props.new_2345[5].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
                {/* Team announcement for South Africa series was unprecedented in many ways  */}
                    {props.new_2345[5].News_details}
                </p>
            </div>
            </div>
        </div>
        </div>

        </div>
    </>
      );
}


export default RecommenderCard;
