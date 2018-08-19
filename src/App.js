import React, { Component } from 'react';
import { Formik } from 'formik';

const BasicExample = () => (
  <Formik 
  initialValues={{ name: 'bang', email:'bangngoduy@gmail.com', label: 'Ngo Duy Bang' }}
  onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
  render={ props => (
    <form onSubmit={props.handleSubmit}>
      {props.values.label}<br/>
      <input
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.name}
        name="name"
      />
      <input
        type="email"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.email}
        name="email"
      />
      <button type="submit"> Submit</button>
    </form>
  )}
  />
);

export default BasicExample;
