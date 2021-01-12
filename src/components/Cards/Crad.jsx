import React from 'react'
// import img1 from "../../Images/travel.jpg";
import { Link } from "react-router-dom";
import "../../componentscss/card.css";


function Card(props){
    return (
        <>
            <div className={props.number_cols}>
                <div className="position-relative image-hover">
                  <img
                    src={props.news.ImagePath}
                    className="img-responsive card_image mr-1 ml-1"
                    alt={props.news.Label}
                   />
                </div>
                <h5 className=" mt-3 news_content ml-1 mr-1">
                    {props.news.News}
                </h5>
                <p className="fs-15 font-weight-normal">
                    {props.news.Date}
                </p>
                <span>Source : </span>
                <span className="fs-13 font-weight-bold">{props.news.Source}</span><br/>
                <a  rel={'external'}  href={"https://"+props.news.Link} className="font-weight-bold text-dark pt-2 read_article"
                  >Read Article
                  </a>
              </div>
        </>
      );
}


export default Card;
