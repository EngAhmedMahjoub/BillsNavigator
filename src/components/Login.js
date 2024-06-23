import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Login.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Track your personal cashflow?</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('/api/login', values).then(response => {
            console.log(response.data);
            setSubmitting(false);
          }).catch(error => {
            console.error(error);
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="form-group">
              <Field type="email" name="email" placeholder="Email" className="form-field" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" placeholder="Password" className="form-field" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-button">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
