import React from 'react';
import '../../componentscss/uiheader.css';
import '../../componentscss/recommender_com.css';



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
                {props.new_2345[1].News_heading}
            </h1>
            <p className="fs-15 font-weight-normal">
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
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                    {props.new_2345[2].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
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
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                    {props.new_2345[3].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
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
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                    {props.new_2345[4].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
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
                </div>
            </a>
                <h5 className="font-weight-600 mt-3">
                    {props.new_2345[5].News_heading}
                </h5>
                <p className="fs-15 font-weight-normal">
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
