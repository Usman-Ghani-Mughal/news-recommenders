import React from "react";
import "../../componentscss/logincomponent.scss";
import { Login, Register } from "../Login/index";



class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }


  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState = () => {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Sign up" : "Sign in";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="Appp">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} userInterest_req={this.props.userInterest_req} userLogin={this.props.userLogin} setDataGlobal={this.props.setDataGlobal} changeState={this.changeState} userRegistring={this.props.userRegistring} registeringFromGoogle={this.props.registeringFromGoogle}/>
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} setDataGlobal={this.props.setDataGlobal}  changeState={this.changeState} userRegistring={this.props.userRegistring}/>
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginComponent;