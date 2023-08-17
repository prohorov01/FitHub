import React from "react";
import { Formik, Form, Field } from "formik";
import "./RegistrationForm.css";

function RegistrationForm({ onSubmit, initialData }) {
  return (
    <Formik
      initialValues={
        initialData || {
          firstName: "",
          lastName: "",
          city: "",
          goal: "",
          progress: 0,
        }
      }
      onSubmit={onSubmit}
    >
      <Form className="registration-form">
        <h3>Fill in your details:</h3>
        <div className="form-group">
          <label className="label" htmlFor="firstName">
            First Name:
          </label>
          <Field
            className="input-field"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="lastName">
            Last Name:
          </label>
          <Field className="input-field" type="text" name="lastName" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="city">
            City:
          </label>
          <Field className="input-field" type="text" name="city" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="goal">
            Training Goal:
          </label>
          <Field className="input-field" type="text" name="goal" />
        </div>
        <button className={`submit-button `} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
