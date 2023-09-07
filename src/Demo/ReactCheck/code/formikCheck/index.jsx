import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("請選擇名字"),
});

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("123");
    },
  });

  console.log(formik.errors, "errors");
  return (
    <>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <button type="button" onClick={() => formik.handleSubmit()}>
        Submit
      </button>
    </>
  );
};

export default SignupForm;
