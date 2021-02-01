import React from 'react'
import '../../componentscss/uiheader.css'
import logo_img from "../../Images/logo7.jpeg";

function Uiheader(props){

    const submitInterest_registeruser = async () => {
        if(props.fromGoogle){
            // From Google.
            await props.interestSubmited();
            // Register and Login here.
            props.google_login_register();
            props.userRegistring(false);
            props.registeringFromGoogle(false);
        }else{
            // From Local
            await props.interestSubmited();
            props.registerUsertoDB();
            props.userRegistring(false);
        }

    }


    return (
        <div className="continer-fluid uih-div"> 
            <div className='row'>
                <div className='col-md-3'>
                    <img src={logo_img} className="logo_img"></img>
                </div>
                <div className='col-md-7 info-class'>
                    <h3>Please select your 3 interests</h3>
                </div>
                <div className='col-md-2' >
                <button type="button" className="btn btn-dark" disabled={props.cat_selected} onClick={submitInterest_registeruser}>Submit</button>
                </div>
            </div>
          </div>

      );
}


export default Uiheader;
