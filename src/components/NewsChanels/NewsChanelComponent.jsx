import React from 'react';

import '../../componentscss/recommender_com.css';
// import "../../componentscss/owl.theme.default.min.css";


import img_b from "../../Images/banner.jpg";
import img_b1 from "../../Images/banner_1.jpg";
import img_b2 from "../../Images/banner_2.jpg";
import img_b3 from "../../Images/banner_3.jpg";

import img_p1 from "../../Images/Profile_1.jpg";
import img_p2 from "../../Images/Profile_2.jpg";
import img_p3 from "../../Images/Profile_3.jpg";
import img_p4 from "../../Images/Profile_4.jpg";
import img_p5 from "../../Images/Profile_5.jpg";
import img_p6 from "../../Images/Profile_6.jpg";




function NewsChanelComponent(props){
    

    return (
        <>

<div className="row">
            <div className="col-lg-8">
              <div className="owl-carousel owl-theme" id="main-banner-carousel">
                  
                <div className="item">
                  <div className="carousel-content-wrapper mb-2">
                    <div className="carousel-content">
                      <h1 className="font-weight-bold">
                      Rooney's Derby beaten, Norwich surge seven clear
                      </h1>
                      <h5 className="font-weight-normal  m-0">
                      Wayne Rooney suffered defeat in his first match in permanent charge of Derby as relegation rivals Rotherham won 1-0 at Pride Park and No...
                      </h5>
                      <p className="text-color m-0 pt-2 d-flex align-items-center">
                        <span className="fs-10 mr-1">2021-01-17</span>
                        <i className="mdi mdi-bookmark-outline mr-3"></i>
                        
                        
                      </p>
                    </div>
                    <div className="carousel-image">
                      <img src={"https://img.dunyanews.tv/news/2021/January/01-16-21/news_big_images/583396_36791275.jpg"} alt="" />
                    </div>
                  </div>
                </div>

                
                  
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-sm-6">
                  <div className="py-3 border-bottom">
                    <div className="d-flex align-items-center pb-2">
                      <img
                        src={img_p1}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span className="fs-12 text-muted">Geo</span>
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
                        src={img_p2}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span className="fs-12 text-muted">Ary</span>
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
                        src={img_p3}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span className="fs-12 text-muted">Dunya</span>
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
                        src={img_p4}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span className="fs-12 text-muted">Bol</span>
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
                        src={img_p5}
                        className="img-xs img-rounded mr-2"
                        alt="thumb"
                      />
                      <span className="fs-12 text-muted">Daily Times</span>
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
                        src={img_p6}
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
