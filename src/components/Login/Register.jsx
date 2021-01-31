import React from 'react'
import loginImg from "../../Images/contact.png";

// Imports from Data validation.
import { regSchema } from "../../Validations/RegisterValidation";
import { Formik, Field, Form, ErrorMessage } from "formik";

// Import comonents
import ErrorText from "../Errormessages/ErrorText";

export function Register(props){

// ----------------------- Required functions and other stuff ---------------------------------- //

// Initial values
const intitialValues = {
  username : '',
  email : '',
  password : '',
}

// onsubmit
const onSubmit = async (values) => {
  // make user object.
  const  userdata = {
    name: values.username,
    email: values.email,
    password: values.password,
  }
  // register user.
  props.setDataGlobal(userdata);
  props.changeState();
  props.userRegistring(true);
}

// ----------------------------------------------------------------------------------------------- //
  return(
    <>
      
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Sign up with News-Recommender</div>
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
                    <button type="submit" className="btn">Sign up</button>
                  </div>
              </Form>
          </Formik>
        </div>
      </div>
    </>
  )


}