import React from 'react'
import '../../componentscss/uiheader.css'


function Uiheader(props){
    console.log("uiheader start");
    
    console.log("ui header : ");
    console.log(props.fromGoogle);


    const submitInterest_registeruser = async () => {
        console.log("ui header : in function");
        console.log(props.fromGoogle);
        if(props.fromGoogle){
            await props.interestSubmited();
            // Register and Login here.
            props.google_login_register();
            props.userRegistring(false);
            props.registeringFromGoogle(false);
        }else{
            console.log("In else from google is not update");
        }
        



       //await props.interestSubmited();
       //props.registerUsertoDB();
       //props.userRegistring(false);
    }


    return (
        <div className="continer-fluid uih-div"> 
            <div className='row'>
                <div className='col-md-3'>
                    <h1 className="logo">Logo</h1>
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
