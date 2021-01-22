import React from 'react';
import ReactLoading from 'react-loading';
import "../../componentscss/loadingAnimationcss.css";



function LoadingAnimation(props){
    return(
            <div className="loadin_animataions">
                <ReactLoading type={props.type} color={props.color} height={props.height} width={props.width}/>
            </div>
            
        
        
    );
    
}
export default LoadingAnimation;