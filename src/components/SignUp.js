import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });
  
  const SignUp = () => {
    return (
      <div className='signup-container'>
        <h1>Sign Up</h1>
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
            <Form className='signup-form'>
              <div className='form-group'>
                <Field type="text" name="username" placeholder="Username" className="form-field"/>
              </div>
              <div className='form-group'>
                <Field type="email" name="email" placeholder="Email" className="form-field"/>
              </div>
              <div className='form-group'>
                <Field type="password" name="password" placeholder="Password" className="form-field"/>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default SignUp;
  