import React from 'react'
import { Link } from 'react-router-dom'
function Header(){
  return (
    <div>
      <button>
        <Link to="/formik">Formik</Link>
      </button>
      <button>
        <Link to="/formikyup">FormikYup</Link>
      </button>
      <button>
        <Link to="/reacttable">React-table</Link>
      </button>
      <button>
        <Link to="/reactintl">React-intl</Link>
      </button>
    </div>
  )
}
export default Header