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
      <div>
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
            <Form>
              <Field type="text" name="username" placeholder="Username" />
              <Field type="email" name="email" placeholder="Email" />
              <Field type="password" name="password" placeholder="Password" />
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
  