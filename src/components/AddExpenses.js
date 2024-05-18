import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ExpenseSchema = Yup.object().shape({
  description: Yup.string().required('Required'),
  amount: Yup.number().positive('Must be a positive number').required('Required'),
  category: Yup.string().required('Required'),
});

const AddExpense = () => {
  return (
    <div>
      <h1>Add Expense</h1>
      <Formik
        initialValues={{ description: '', amount: '', category: '' }}
        validationSchema={ExpenseSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('/api/expenses', values).then(response => {
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
            <Field type="text" name="description" placeholder="Description" />
            <Field type="number" name="amount" placeholder="Amount" />
            <Field type="text" name="category" placeholder="Category" />
            <button type="submit" disabled={isSubmitting}>
              Add Expense
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddExpense;
