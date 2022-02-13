import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormikSubmit = () =>{
  const [page, setPage] = useState('main')
  const handleSubmit = () =>{
    setPage('next')
  }
  return (
    <Search handleSubmit={handleSubmit}/>
  )
}

const initialValues = {
  name: '',
  age: '',
  tall: '',
  weight: ''
}

const Search = ({ handleSubmit }) =>{
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
    onSubmit: handleSubmit
  })

  useEffect(()=>{
    if(formik.isValidating){
      console.log('isValidating')
    }
  }, [formik.isValidating])

  useEffect(()=>{
    if(formik.isSubmitting){
      console.log('isSubmit')
    }
  }, [formik.isSubmitting])
  
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='name'>請輸入姓名</label>
          <input 
            type='text' 
            className='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            id='name'
          />
          {
            (formik.touched.name && formik.errors.name) ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : ''
          }
        </div>
        <div>
          <label htmlFor='name'>請輸入年齡</label>
          <input 
            type='text' 
            className='age'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            id='age'
          />
          {
            (formik.touched.age && formik.errors.age) ? <div style={{ color: 'red' }}>{formik.errors.age}</div> : ''
          }
        </div>
        <div>
          <label htmlFor='name'>請輸入身高</label>
          <input 
            type='text' 
            className='tall'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tall}
            id='tall'
          />
          {
            (formik.touched.tall && formik.errors.tall) ? <div style={{ color: 'red' }}>{formik.errors.tall}</div> : ''
          }
        </div>
        <div>
          <label htmlFor='weight'>請輸入體重</label>
          <input 
            type='text' 
            className='weight'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.weight}
            id='weight'
          />
          {
            (formik.touched.weight && formik.errors.weight) ? <div style={{ color: 'red' }}>{formik.errors.weight}</div> : ''
          }
        </div>
        <div>
          <button 
            type='submit'
          >
              下一頁
          </button>
          <button 
            type='button'
            onClick={()=>console.log('button click')}
          >
              上一頁
          </button>
        </div>
      </form>
    </>
  )
}

const Result =() =>{
  return (
    <h1>Result</h1>
  )
}

export default FormikSubmit

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}