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
      <button>
        <Link to="/chart">Chart</Link>
      </button>
      <button>
        <Link to="/colspan">colspan</Link>
      </button>
      <button>
        <Link to="/saga">saga</Link>
      </button>
      <button>
        <Link to="/jsx-control">jsx-control</Link>
      </button>
    </div>
  )
}
export default Header