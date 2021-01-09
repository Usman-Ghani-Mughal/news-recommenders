import React from "react";
import loginImg from "../../Images/login.svg";


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


  render() {
    return (
      
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="LoginImage"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.submitData}> Login </button>
        </div>
      </div>
    );
  }
}