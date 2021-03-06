import React from 'react';
import { NavLink } from "react-router-dom";
import '../../componentscss/recommender_com.css';
// import "../../componentscss/owl.theme.default.min.css";

import img_geo from "../../Images/geo1.png";
import img_ary from "../../Images/ary1.jpg";
import img_dunya from "../../Images/Dunya_News.jpg";
import img_bol from "../../Images/bol1.jpg";
import img_daily from "../../Images/daily_times.jpg";
import img_bbc from "../../Images/bbc.png";




function NewsChanelComponent(props){
    return (
        <>

          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10 col-12">
              <div className="owl-carousel owl-theme" id="main-banner-carousel">
                <a rel={'external'}  href={"https://"+props.news_1.Link}>
                <div className="item">
                  <div className="carousel-content-wrapper mb-2">
                    <div className="carousel-content">
                      <h1 className="font-weight-bold news_heading1">
                        {props.news_1.News_heading}
                      </h1>
                      <h5 className="font-weight-normal  m-0 news_heading1">
                          {props.news_1.News_details}
                      </h5>
                      <p className="text-color m-0 pt-2 d-flex align-items-center">
                        <span className="fs-10 mr-1">{props.news_1.Date}</span>
                        <i className="mdi mdi-bookmark-outline mr-3"></i>
                      </p>
                    </div>
                    <div className="carousel-image image-hover">
                      <img src={props.news_1.ImagePath} alt="" />
                    </div>
                  </div>
                </div>
                </a>

                
                  
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-sm-6">
                  <div className="py-3 border-bottom">
                    <div className="d-flex align-items-center pb-2">
                      <img
                        src={img_geo}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <NavLink  className="fs-12 text-muted" to="/geo">Geo</NavLink>
                    </div>
                    <p className="fs-14 m-0 font-weight-medium line-height-sm">
                    Geo TV provides latest news
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-3 border-bottom">
                    <div className="d-flex align-items-center pb-2">
                      <img
                        src={img_ary}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <NavLink className="fs-12 text-muted" to="/ary" >Ary</NavLink>
                    </div>
                    <p className="fs-14 m-0 font-weight-medium line-height-sm">
                    ARY News is a Pakistani news channel
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="pt-4 pb-4 border-bottom">
                    <div className="d-flex align-items-center pb-2">
                      <img
                        src={img_dunya}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <NavLink className="fs-12 text-muted" to="/dunya" >Dunya</NavLink>
                    </div>
                    <p className="fs-14 m-0 font-weight-medium line-height-sm">
                    Dunya News is the most popular Urdu language news
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pt-3 pb-4 border-bottom">
                    <div className="d-flex align-items-center pb-2">
                      <img
                        src={img_bol}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <NavLink className="fs-12 text-muted" to="/bol" >Bol</NavLink>
                    </div>
                    <p className="fs-14 m-0 font-weight-medium line-height-sm">
                    BOL News | Pakistan Latest News Updates -  Breaking news
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="pt-4 pb-4">
                    <div className="d-flex align-items-center pb-2">
                      <img
                        src={img_daily}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <NavLink className="fs-12 text-muted" to="/dailytimes" >Daily Times</NavLink>
                    </div>
                    <p className="fs-14 m-0 font-weight-medium line-height-sm">
                    Daily Times is an English-language Pakistani newspaper
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="pt-3 pb-4">
                    <div className="d-flex align-items-center pb-2">
                      <img
                        src={img_bbc}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span className="fs-12 text-muted">BBC</span>
                    </div>
                    <p className="fs-14 m-0 font-weight-medium line-height-sm">
                    BBC News provides trusted World and UK news
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </>
      );
}


export default NewsChanelComponent;
