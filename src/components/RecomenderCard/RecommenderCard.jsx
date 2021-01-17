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
            <div className="position-relative image-hover">
            <img
                src={"https://img.dunyanews.tv/news/2021/January/01-16-21/news_big_images/583356_40827545.jpg1"}
                className="img-fluid"
                alt="world-news"
            />
            <span className="thumb-title">TECHNOLOGY</span>
            </div>
            <h1 className="font-weight-600 mt-3">
            Google Play is unsportsmanlike, U.S. states likely to argue in potential lawsuit
            </h1>
            <p className="fs-15 font-weight-normal">
            WASHINGTON (Reuters) - State attorneys general are planning a third lawsuit against Alphabet Inc’s Google, this...
            </p>
        </div>
        <div className="col-lg-6  mb-5 mb-sm-2">
            <div className="row">
            <div className="col-sm-6  mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                <img
                    src={"https://bolnews.s3.amazonaws.com/wp-content/uploads/2021/01/as-76-539x308.jpg"}
                    className="img-fluid"
                    alt="world-news"
                />
                <span className="thumb-title">Pakistan</span>
                </div>
                <h5 className="font-weight-600 mt-3">
                Quetta: 4 Injured In Blast On Sariab Road
                </h5>
                <p className="fs-15 font-weight-normal">
                our people were injured in an explosion on Sariab Road in Quetta. 
                </p>
            </div>
            <div className="col-sm-6  mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                <img
                    src={"https://bolnews.s3.amazonaws.com/wp-content/uploads/2021/01/as-74-539x308.jpg"}
                    className="img-fluid"
                    alt="world-news"
                />
                <span className="thumb-title">Health</span>
                </div>
                <h5 className="font-weight-600 mt-3">
                Beetroot Raita: Carve Your Cravings With This Side Dish
                </h5>
                <p className="fs-15 font-weight-normal">
                The use of beetroot is very common in the subcontinent
                </p>
            </div>
            </div>
            <div className="row mt-3">
            <div className="col-sm-6  mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                <img
                    src={"https://www.geo.tv/assets/uploads/updates/2021-01-16/l_330294_110150_updates.jpg"}
                    className="img-fluid"
                    alt="world-news"
                />
                <span className="thumb-title">Pakistan</span>
                </div>
                <h5 className="font-weight-600 mt-3">
                PIA to appear before London, Malaysian courts over lease payment issue: aviation minister
                </h5>
                <p className="fs-15 font-weight-normal">
                PIA officials will appear before a London court on January 22 and before a Malaysian court on January 24
                                </p>
            </div>
            <div className="col-sm-6">
                <div className="position-relative image-hover">
                <img
                    src={"https://www.geo.tv/assets/uploads/updates/2021-01-16/l_330243_034426_updates.jpg"}
                    className="img-fluid"
                    alt="world-news"
                />
                <span className="thumb-title">Sports</span>
                </div>
                <h5 className="font-weight-600 mt-3">
                New Pakistan chief selector introduces data-based criteria
                </h5>
                <p className="fs-15 font-weight-normal">
                Team announcement for South Africa series was unprecedented in many ways 
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
