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
      <button>
        <Link to="/day-js">Day.Js</Link>
      </button>
      <button>
        <Link to="/formik-2">formik 2.0 草稿</Link>
      </button>
      <button>
        <Link to="/formik-20">formik 2.0</Link>
      </button>
      <button>
        <Link to="/react-modal">React-modal</Link>
      </button>
      <button>
        <Link to="/selector-test">React-modal</Link>
      </button>
      <button>
        <Link to="/react-dnd">React-dnd</Link>
      </button>
      <button>
        <Link to="/rt-job">React-table-job</Link>
      </button>
      <button>
        <Link to="/js-saga">job-style-saga</Link>
      </button>
      <button>
        <Link to="/svg">svg</Link>
      </button>
      <button>
        <Link to="/react-slick">react-slick</Link>
      </button>
      <button>
        <Link to="/qrcode">react-qrcode</Link>
      </button>
    </div>
  )
}
export default Header