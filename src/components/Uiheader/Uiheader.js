import React from 'react'
import '../../componentscss/uiheader.css'


function Uiheader(props){
    
    const submitInterest_registeruser = async () => {
       await props.interestSubmited();
       props.registerUsertoDB();
       props.userRegistring(false);
    }


    return (
        <div className="continer-fluid uih-div"> 
            <div className='row'>
                <div className='col-md-3'>
                    <h1 class="logo">Logo</h1>
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
