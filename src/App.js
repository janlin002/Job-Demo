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
import Colspan from './Demo/colspan/colspan';
import Saga from './Demo/checkSaga'
import JsxControl from './Demo/jsx-control-statements'
import DayJs from './Demo/Dayjs'
import Formik2 from './Demo/Formik-Yup/Formik2.js'
import Formik20 from './Demo/formik2.0'
import FormikResult from './Demo/formik2.0/result'
import ReactModal from './Demo/React-modal'
import SelectorTest from './Demo/SelectorTest'
 
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
            <Route path="/colspan" exact component={Colspan}></Route>
            <Route path="/saga" exact component={Saga}></Route>
            <Route path="/jsx-control" exact component={JsxControl}></Route>
            <Route path="/day-js" exact component={DayJs}></Route>
            <Route path="/formik-2" exact component={Formik2}></Route>
            <Route path="/formik-20" exact component={Formik20}></Route>
            <Route path="/formik-next" exact component={FormikResult}></Route>
            <Route path="/react-modal" exact component={ReactModal}></Route>
            <Route path="/selector-test" exact component={SelectorTest}></Route>
          </Switch>
        </Router>
      </IntlProvider>
    </div>
  )
}
export default App
