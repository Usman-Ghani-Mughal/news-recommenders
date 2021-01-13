import React, {useState} from 'react'
import loginImg from "../../Images/login.svg";


// import * as yup from 'yup';
import { regSchema } from "../../Validations/RegisterValidation";
import { Formik, Field, Form, ErrorMessage } from "formik";
// Import comonents
import ErrorText from "../Errormessages/ErrorText";


// // previous submit
// const saveUserTOSTore = async () => {
//   // // validate the data
//   // let form_data = {
//   //   username: this.state.name,
//   //   email: this.state.email,
//   //   password: this.state.password, 
//   // }

//   // const isValid = await regSchema.isValid(form_data);
//   // if(isValid){
 
  
//   // }else{

//   // }

// }



export function Register(props){

// ----------------------- Required function and other stuf ---------------------------------- //
  // import init values
const intitialValues = {
  username : '',
  email : '',
  password : '',
}
// onsubmit
const onSubmit = async (values) => {
  console.log('form data : ', values);
   //make user object
  const  userdata = {
    name: values.username,
    email: values.email,
    password: values.password,
  }
  // register data
  props.setDataGlobal(userdata);
  props.changeState();
  props.userRegistring(true);
}
// ---------------------------------------------------------------------------- //
  // const [name, setname] = useState("");
  // const [email, setnemail] = useState("");
  // const [password, setpassword] = useState("");

  return(
    <>
      
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Register</div>
          <div className="content">
            <div className="image">
                <img src={loginImg}  alt="RegisterImage"/>
            </div>
            <Formik
              initialValues = {intitialValues}
              validationSchema = {regSchema}
              onSubmit = {onSubmit}
            >  
              <Form>
                <div className="form">
                  <div className="form-group">
                    <label className="form_labels" htmlFor="username">Username</label>
                    <Field type="text" name="username" placeholder="username"/>
                    <ErrorMessage
                      name="username"
                      component= {ErrorText}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form_labels" htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="email@email.com"/>
                    <ErrorMessage
                      name="email"
                      component= {ErrorText}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form_labels" htmlFor="password">Password</label>
                    <Field type="password" name="password" placeholder="password"/>
                    <ErrorMessage
                      name="password"
                      component= {ErrorText}
                    />
                  </div>
                </div>
                  <div className="footer">
                    <button type="submit" className="btn">Register</button>
                  </div>
              </Form>
          </Formik>
        </div>
      </div>
    </>
  )


}

//  default Register;

// export class Register extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       password: ""
//     }
    
//   }

  


//   render() {

//     return (

      
//     );
//   }
// }

//onClick = {this.saveUserTOSTore()}