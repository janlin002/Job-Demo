import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function FormikYup(){
  const formik = useFormik({
    // 初始值
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    // 表單條件 代替Formik
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('請輸入firstName'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('請輸入lastName'),
      email: Yup.string().email('請輸入正確email').required('請輸入email'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h1>formik 搭配 yup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>   
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default FormikYup