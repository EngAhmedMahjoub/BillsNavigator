import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignUp.css'

const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });
  
  const SignUp = () => {
    return (
      <div className= "signup-container">
        <h1>Sign Up</h1>
        <p>Create a new account for free.</p>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={SignUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            axios.post('/api/register', values).then(response => {
              console.log(response.data);
              setSubmitting(false);
            }).catch(error => {
              console.error(error);
              setSubmitting(false);
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="signup-form">
              <div className="form-group">
                <Field type="text" name="username" placeholder="Username" className="form-field"/>
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>
              <div className='form-group'>
                <Field type="email" name="email" placeholder="Email" className="form-field"/>
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className='form-group'>
                <Field type="password" name="password" placeholder="Password" className="form-field"/>
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting} className='submit-button'>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default SignUp;
  