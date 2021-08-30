import './App.css'
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import Formik from './Demo/Formik-Yup/Formik'
import ReactTable from './Demo/Recat-table/ReactTable'
import FormikYup from './Demo/Formik-Yup/FormikYup.jsx'
import Header from './Header'
import ReactIntl from './Demo/React-intl/react-intl'
import { useSelector } from 'react-redux'
import Chart from './Demo/Chart/chart'
 
function App() {
  const [locale, setLocale] = useState(undefined)
  const lang = useSelector(state=>state.localeLanguage)
  // const locale = navigator.language;
  useEffect(async() => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLocale(data)
  },[lang])
  return (
    <div>
      <IntlProvider messages={locale}>
        <Router>
          <Header />
          <Switch>
            <Route path="/formik" exact component={Formik}></Route>
            <Route path="/formikyup" exact component={FormikYup}></Route>
            <Route path="/reacttable" exact component={ReactTable}></Route>
            <Route path="/reactintl" exact component={ReactIntl}></Route>
            <Route path="/chart" exact component={Chart}></Route>
          </Switch>
        </Router>
      </IntlProvider>
    </div>
  )
}
export default App
