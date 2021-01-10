import React from "react";
import loginImg from "../../Images/login.svg";

// import actions

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    }
    
  }

  saveUserTOSTore = () => {
    // validate the data
    //make user object
      const  userdata = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    this.props.setDataGlobal(userdata);
    this.props.changeState();
    this.props.userRegistring(true);
  }


  render() {

    return (

      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg}  alt="RegisterImage"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.saveUserTOSTore}>Register</button>
        </div>
      </div>
    );
  }
}

//onClick = {this.saveUserTOSTore()}