import React from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from 'antd'
import { Formik } from 'formik'
function Formiks(){
  return (
    <div>
      {/* <Button type="primary">
        <Link to="/">Home</Link>
      </Button> */}
      <div>
        <h1>formik練習</h1>
        <Formik
          // 表單條件
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = '請輸入email';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = '請輸入正確的email';
            }
            return errors;
          }}
          // 點擊顯示資料
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </div>
              <button type="submit" disabled={isSubmitting}>
             Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default Formiks