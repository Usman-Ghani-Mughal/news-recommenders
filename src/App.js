import React, {useState} from 'react'

// used for routes
import { Switch, Route, Redirect, Router} from "react-router-dom";
import axios from 'axios';

// import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./componentscss/topheader.css";
import "./componentscss/coronabaner.css";
// import Popper from 'popper.js'

// // silk
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

// import web pages
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


// for accessing global store
import {useSelector, useDispatch} from 'react-redux'
// import actions
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
                                                                      Global state
    --------------------------------------------------------------------------------------------------------------------------------------------------------------
  */
  // make reducers for geting values.
  const wehaveinterst = useSelector(state => state.haveInterestsReducer);
  const userData_req = useSelector(state => state.userDataReducer);
  const userinterest_req = useSelector(state => state.userInterestsReducer);
  const islogin = useSelector(state => state.loginReducer);
  const fromGoogle = useSelector(state => state.googleLoginReducer);
  

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
                                                                       Required Function
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  */
 // This function will send register for login user to api.
 const userLogin = async (userdata) => {
   // gether data
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
         'auth-token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwZGFjYmE4NGQ3NzZlNDg2NTBjZjciLCJpYXQiOjE2MDc1ODU0NzZ9.7ZNuggciEK7p9EtmBJESVQJtLIbCl_uVc3G-tyk3qVo',
      }
    }).then( (response) =>{
        console.log("************ Ok ***********");
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
        }else{
          alert(response.data.description);
        }
    }).catch(err => {
      console.log("************ Error ***********");
      alert("Invalid username or password");
    });

   } catch (err) {
    console.log(err);
   }

 }

 // This function Logout the user
//  const userLogout = () =>{
//   dispatch(login(false));
//   localStorage.clear();
//  }
// This function will reguster user into db using api.
 const registerUsertoDB = async () => {
  // gether all user data
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
        'auth-token': ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQwZGFjYmE4NGQ3NzZlNDg2NTBjZjciLCJpYXQiOjE2MDc1ODU0NzZ9.7ZNuggciEK7p9EtmBJESVQJtLIbCl_uVc3G-tyk3qVo',
     }
    }).then((response) => {
      if(response.data.success){
        alert('User is register succesfully');
      }else{
        alert(response.description);
      }
    }).catch(err =>{
      console.log(err);
      alert(err);
    });
    
  } catch (err) {
    console.log(err);
    alert(err);
  }
}

const google_login_register = async () => {
  let username_req = userData_req.name;
  let password_req = userData_req.password;
  const  userdata = {
    name: username_req,
    password: password_req,
  }
  await registerUsertoDB();
  console.log(userdata);
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

// This method is used when we want to add category into UIarray.
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
    //  console.log("setglobal state");
    //  console.log(userdata);
      if(userdata){
        // console.log(userdata)
        dispatch(setUserData(userdata) );
      }

   }

// set user is registring using goole.
const registeringFromGoogle =  async (decision) => {
  console.log("registering from google called");
  await dispatch(googlelogin(decision));
  console.log("registering from google called done");
}
   // ============================================================  ======================================================================   //
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
  let checkuserlogin = localStorage.getItem('userlogin');
  


  if(islogin){
    // let udata = localStorage.getItem('userloginInfo');
    // udata = JSON.parse(udata);
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
          {/* <Route exact path="/entertainment" component= {Entertainment}></Route> */}
          <Route exact path="/about" component= {About}></Route>
          <Route exact path="/contact" component= {Contact}></Route>
          <Redirect to="/"></Redirect>
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

  // const updateCategories = (category) => {
  //   console.log('update called');
  //   var temp = categories;
  //   temp =  temp + category+",";
  //   console.log(temp);
  //   chnageCategories({categories : temp});
  //   console.log("done");
  // }

//   return (
//     <div className="App"> 
//         <Uiheader></Uiheader>
//         <Getuserintersts cat_selected={cat_selected} chnageCatSelected={chnageCatSelected} updateCategories={updateCategories}> </Getuserintersts>
//         <Footer categories={categories}></Footer>
//       </div>

//   );
// }

// class App extends React.Component{
//     constructor(){
//       super()
//       this.state = {
//         cat_selected : true,
//         categories: "",
//         test:true 
//       }
//       this.addCategories = this.addCategories.bind(this);
//       this.removeCategories = this.removeCategories.bind(this);
//       this.allowSubmit = this.allowSubmit.bind(this);

    //   // const wehaveinterst = useSelector(state => state.haveInterestsReducer);
    // }

  // render()
  // {
    
  //   if(this.wehaveinterst)
  //   {
  //     return(
  //       <h1>I already Gave you the interest bro!</h1>
  //     )
  //   }
  //   else
  //   {
  //     return(
  //       <div className="App"> 
  //           <Uiheader cat_selected={this.state.cat_selected}></Uiheader>
  //           <Getuserintersts  addCategories={this.addCategories} removeCategories={this.removeCategories} allowSubmit={this.allowSubmit}></Getuserintersts>
  //           <Footer categories={this.state.categories}></Footer>
  //     </div>
  //     )
  //   }
  // }

  // used to add categories
  
// }