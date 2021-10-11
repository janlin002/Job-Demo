import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  age: '',
  tall: '',
  weight: ''
}

const Formik2 = () =>{
  const [ page, setPage ] = useState('main')
  const handleClick = () =>{
    setPage('nextPage')
  }
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('名稱 為必填欄位'),
      age: Yup.number()
        .required('年齡 為必填欄位'),
      tall: Yup.number()
        .required('身高 為必填欄位'),
      weight: Yup.number()
        .required('體重 為必填欄位')
    }),
    onSubmit: handleClick
  })
  console.log(formik, 'formik')
  console.log(formik.touched.name, 'name')
  console.log(formik.errors.name, 'error')
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">請輸入姓名</label>
        <input 
          type="text" 
          className="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="name"
        />
        {
          (formik.touched.name && formik.errors.name) ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : ''
        }
      </form>
      <button onClick={handleClick}>下一頁</button>
    </>
  )
}

export default Formik2

//TODO: 需拉出去寫，且加入結果頁