import React from "react";
import axios from 'axios';
import loginImg from "../../Images/contact.png";
import GoogleLogin from "react-google-login";
import swal from 'sweetalert';


export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    }

  }

  submitData = () => {
    // validate the data
    //make user object
      const  userdata = {
      name: this.state.name,
      password: this.state.password,
    }
    this.props.userLogin(userdata);
  }

  googleSuccess = async (response) => {
    // console.log("google success");
    // console.log(response);
    // console.log(response.profileObj.email);
    // console.log(response.profileObj.name);

    let g_email = response.profileObj.email;
    let g_name = response.profileObj.name;
    let g_password = response.profileObj.name + response.profileObj.email;

    // first check if user is already register or not?
    // now we have data, from here we will make request.
  try {

    // making request
    await axios({
      method: 'post',
      url: 'https://damp-brushlands-70035.herokuapp.com/newsapi/user/alreadyRegister',
      data: {
        name: g_name,
        email: g_email,
        password: g_password,
        userinterests: "BUSINESS,OFFBEAT,WORLD"
      },
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'auth-token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwZGFjYmE4NGQ3NzZlNDg2NTBjZjciLCJpYXQiOjE2MDc1ODU0NzZ9.7ZNuggciEK7p9EtmBJESVQJtLIbCl_uVc3G-tyk3qVo',
     }
    }).then( async (response) => {
      // console.log("in response");
      if(response.data.success){
        // console.log("in response is 1");
        // user is not register before we can ask him for interest and then login.
        const userdata = {
          name: g_name,
          email: g_email,
           password: g_password,
        }
        this.props.setDataGlobal(userdata);
        this.props.changeState();
        await this.props.registeringFromGoogle(true);
        this.props.userRegistring(true);
        // till here we have the user name and email

      }else if(response.data.success === -1){
        // console.log("in response is -1");
        // some error while checking
        // alert(response.description);
        swal("News Recommender", response.description, "error");

      }else{
        // console.log("in response is 0");
        // user is already register lets login him
        const  userdata = {
          name: g_name,
          password: g_password,
        }
        
        this.props.userLogin(userdata);
      }
    }).catch(err =>{
      // console.log(err);
      //alert(err);
      swal("News Recommender", err, "error");
    });
    
  } catch (err) {
    // console.log(err);
    //alert(err);
    swal("News Recommender", err, "error");
  }


  }

  googleNotSuccess = (response) => {
    //console.log(response);
  }

  render() {
    return (
      
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Sign in to News-Recommender</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="LoginImage"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label className="form_labels" htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            <div className="form-group">
              <label className="form_labels" htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.submitData}> Sign in </button>
        </div>
        <br></br>
        <GoogleLogin
              clientId="207509704257-n0vdkj7lp44n68smnbt2f2tdof936leq.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess= {this.googleSuccess}
              onFailure= {this.googleNotSuccess}
              cookiePolicy={'single_host_origin'}
          >
          </GoogleLogin>
      </div>
    );
  }
}