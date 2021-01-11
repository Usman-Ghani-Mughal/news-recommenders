import React from "react";

function ErrorText(props) {
    return (
        <div className="errormsgs"> 
            {props.children}
        </div>
    )
}

export default ErrorText;