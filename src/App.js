import React, {useState} from 'react'

// used for routes
import { Switch, Route, Redirect, Router} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./componentscss/topheader.css";
import "./componentscss/coronabaner.css";
// import Popper from 'popper.js'

// silk
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";



// Import Components
import Uiheader from './components/Uiheader/Uiheader'
import Footer from './components/Footer/Footer'
import Getuserintersts  from './components/GetUserInterests/Getuserintersts'
import Logincomponent from "./components/LogincomponentHandler/Logincomponent";
import TopHeader from './components/Header/TopHeader';
import NavBar from "./components/Navbar/NavBar";
import MainFooter from "./components/Footer/MainFooter";
import CoronaBaner from "./components/Corona/CoronaBaner";

// import categories pages
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LatestNews from "./pages/LatestNews";
import Pakistan from "./pages/Pakistan";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import World from "./pages/World";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import LifeStyle from "./pages/LifeStyle";
import Offbeat from "./pages/Offbeat";
import SCITECH from "./pages/SCITECH";
// import channels pages
import Geo from "./pages/Geo";
import Ary from "./pages/Ary";
import Dunya from "./pages/Dunya";
import Bol from "./pages/Bol";
import DailyTimes from "./pages/DailyTimes";


// For accessing global store
import {useSelector, useDispatch} from 'react-redux'

// import actions for Global states.
import {gotinterests} from './actions/haveinterstAction';
import {setIntersts} from './actions/userinterstAction';
import {login} from "./actions/loginAction";
import {setUserData} from "./actions/userDataAction";
import {googlelogin} from "./actions/googleLoginAction";




// -------------------------------------------------------- Component starts from here -----------------------------------------------------------------------------

function App()
{
  //localStorage.clear();
  /*
    --------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                      Global states
    --------------------------------------------------------------------------------------------------------------------------------------------------------------
  */
  // make reducers for geting values.
  const userData_req = useSelector(state => state.userDataReducer);
  const islogin = useSelector(state => state.loginReducer);
  const fromGoogle = useSelector(state => state.googleLoginReducer);

  // const userinterest_req = useSelector(state => state.userInterestsReducer);
  // const wehaveinterst = useSelector(state => state.haveInterestsReducer);

  // make dispatch object
  const dispatch = useDispatch();

  /*
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                       Local states 
    -----------------------------------------------------------------------------------------------------------------------------------------------------------------
   */

  // category_selected is used to submit able and disable button.
  var [category_selected, chnageCatSelected] = useState({notselected : true});
  // UIarray is used to store categories which are selected by user.
  var [categories, chnageCategories] = useState({UIarray : []});
  var [userisRegistering, chnageUserRegistering] = useState({reg: false});

  /*  
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                        Init states
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  */

  // init state to check login.
  if(localStorage.getItem('userlogin')){
    dispatch(login(true));
  }else{
    dispatch(login(false));
  }
  // get user_login info data from local storage.
  let userData = localStorage.getItem('userloginInfo');
  if(userData){
    userData = JSON.parse(userData);
  }

  /*
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                       Required Functions
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  */

 // This function will send request for login user.
 const userLogin = async (userdata) => {
   // get data
   let name = userdata.name;
   let password = userdata.password;

   try {
   await axios({
      method: 'post',
      url: 'https://damp-brushlands-70035.herokuapp.com/newsapi/user/login',
      data: {
              name: name,
              password: password,
          },
      headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': 'true',
         'auth-token': process.env.REACT_APP_AUTH_TOKEN,
      }
    }).then( (response) =>{
        // if response success is ok 
        if(response.data.success){
          let userLogin_info = {
            description: response.data.description,
            user_id : response.data.user_details.id,
            username : response.data.user_details.name,
            userinterests : response.data.user_details.userinterests,
          }
          localStorage.setItem('userlogin', response.data.success);
          localStorage.setItem('userloginInfo', JSON.stringify(userLogin_info));
          dispatch(login(true));
          //swal("News Recommender", "Welcome: "+ name +"\nYou are Login successfully", "success");
        }else{
          //alert(response.data.description);
          swal("News Recommender", response.data.description, "error");
        }
    }).catch(err => {
     // alert("Invalid username or password");
      swal("News Recommender", "Invalid username or password", "error");
    });

   } catch (err) {
    // console.log(err);
    swal("News Recommender", err, "error");
   }

 }

// This function will register user.
 const registerUsertoDB = async () => {
  // get all user data
  let userintersts_array = localStorage.getItem("userinterstsarray");
  localStorage.removeItem("userinterstsarray");

  let username_req = userData_req.name;
  let email_req = userData_req.email;
  let password_req = userData_req.password;
  
  // now we have data, from here we will make request.
  try {
    // making request
   await axios({
      method: 'post',
      url: 'https://damp-brushlands-70035.herokuapp.com/newsapi/user/register',
      data: {
        name: username_req,
        email: email_req,
        password: password_req,
        userinterests: userintersts_array
      },
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'auth-token': process.env.REACT_APP_AUTH_TOKEN,
     }
    }).then((response) => {
      if(response.data.success){
        // alert('User is register succesfully');
        swal("News Recommender", "Welcome: "+ username_req +"\nYou are register successfully", "success");
      }else{
        // alert(response.data.description);
        swal("News Recommender", response.data.description, "error");
        localStorage.clear();
      }
    }).catch(err =>{
      // alert(err);
      swal("News Recommender", err, "error");
      localStorage.clear();
    });
    
  } catch (err) {
    // alert(err);
    swal("News Recommender", err, "error");
    localStorage.clear();
  }
}
// This function is used for regster user using google.
const google_login_register = async () => {
  // Get data.
  let username_req = userData_req.name;
  let password_req = userData_req.password;
  const  userdata = {
    name: username_req,
    password: password_req,
  }
  // Register user.
  await registerUsertoDB();
  // Login user.
  await userLogin(userdata);
}

// This function will call when submit button is press.
const interestSubmited = () => {
    // check if categories are selected or not.
    if (!category_selected.notselected){
          // put user interest into global state. 
          dispatch(setIntersts(categories.UIarray));
          // Put true in got interests. 
          dispatch(gotinterests());

          chnageUserRegistering({
            reg: false
          });
          localStorage.setItem("userinterstsarray", categories.UIarray);
          chnageCategories({UIarray:[]});
    }
  }

// This function is used when we want to add category into UIarray.
const addCategories = (category) => {
      var temp = categories.UIarray;
      temp.push(category);
      chnageCategories({
        UIarray: temp
      });
    }

// used to remove category from UIarray.
const removeCategories = (category) =>{
      var temp = categories.UIarray;
      temp = temp.filter(function(value, index, arr){
        if (value === category){
          return false;
        }
        return true;
      });
      chnageCategories({
        UIarray: temp
      });
    }
  
// When user have 3 interest decision will be false and submit button will be allow to press.
const allowSubmit = (decision) =>{
      chnageCatSelected({
        notselected : decision
      });
   }
const userRegistring = (decision) => {
      chnageUserRegistering({
        reg: decision
      });
   }

// set user information to global states.
const setDataGlobal = async (userdata) => {
      if(userdata){
        dispatch(setUserData(userdata) );
      }
   }

// set user is registring using goole.
const registeringFromGoogle =  async (decision) => {
  await dispatch(googlelogin(decision));
}


/*
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                        Bussines Logic from  here   
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

  1-> Check if user is Login or not ?
      -> if user is not login then.
          -> Then show Login Page.  -> Or go to Register page and then select interests and then come to login
      -> if user is login then.
        -> Then move to home page. ->
  2-> 
*/
  
  // let checkuserlogin = localStorage.getItem('userlogin');
  // let udata = localStorage.getItem('userloginInfo');
  // udata = JSON.parse(udata);
  
  if(islogin){
    
    return(
      <>
        <TopHeader></TopHeader>
        <NavBar></NavBar>
        <CoronaBaner></CoronaBaner>

        <Switch>
          <Route exact path="/" component= {Home}></Route>
          <Route exact path="/latestnews" component= {LatestNews}></Route>
          <Route exact path="/pakistan" component= {Pakistan}></Route>
          <Route exact path="/world" component= {World}></Route>
          <Route exact path="/technology" component= {Technology}></Route>
          <Route exact path="/sports" component= {Sports}></Route>
          <Route exact path="/business" component= {Business}></Route>
          <Route exact path="/lifestyle" component= {LifeStyle}></Route>
          <Route exact path="/health" component= {Health}></Route>
          <Route exact path="/scitech" component= {SCITECH}></Route>
          <Route exact path="/offbeat" component= {Offbeat}></Route>
          <Route exact path="/entertainment" component= {Entertainment}></Route>

          <Route exact path="/geo" component= {Geo}></Route>
          <Route exact path="/ary" component= {Ary}></Route>
          <Route exact path="/dunya" component= {Dunya}></Route>
          <Route exact path="/bol" component= {Bol}></Route>
          <Route exact path="/dailytimes" component= {DailyTimes}></Route>

          <Route exact path="/about" component= {About}></Route>
          <Route exact path="/contact" component= {Contact}></Route>
          {/* <Redirect to="/"></Redirect> */}
        </Switch>
        
        <MainFooter></MainFooter>
      </>
    )
  }else if(userisRegistering.reg){
    return(
      <div className="App"> 
            <Uiheader cat_selected={category_selected.notselected} interestSubmited={interestSubmited} registerUsertoDB={registerUsertoDB} userRegistring={userRegistring} registeringFromGoogle={registeringFromGoogle} fromGoogle={fromGoogle} google_login_register={google_login_register}></Uiheader>
            <Getuserintersts  addCategories={addCategories} removeCategories={removeCategories} allowSubmit={allowSubmit}></Getuserintersts>
            <Footer categories={categories.UIarray} ></Footer>
      </div>
    )
  }
  else{
      return(
        <Logincomponent setDataGlobal={setDataGlobal} userRegistring={userRegistring} userLogin={userLogin} registeringFromGoogle={registeringFromGoogle} ></Logincomponent>
      )
    }

}

export default App;