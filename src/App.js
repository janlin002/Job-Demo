import './App.css'
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

const Formik = lazy(()=>import(/* webpackChunkName: "Formik" */'./Demo/Formik-Yup/Formik'))
const ReactTable = lazy(()=>import(/* webpackChunkName: "ReactTable" */'./Demo/Recat-table/ReactTable'))
const FormikYup = lazy(()=>import(/* webpackChunkName: "FormikYup" */'./Demo/Formik-Yup/FormikYup.jsx'))
const FrostedGlass = lazy(()=>import(/* webpackChunkName: "FrostedGlass" */ './Demo/FrostedGlass'))
const ReactQuery = lazy(()=>import(/* webpackChunkName: "ReactQuery" */ './Demo/React-query'))
const Immer = lazy(()=>import(/* webpackChunkName: "immer" */ './Demo/immer'))
const ReduxToolkitTest = lazy(()=>import(/* webpackChunkName: "immer" */ './Demo/ReduxToolkitTest'))
const DriveJs = lazy(()=>import(/* webpackChunkName: "DriveJs" */ './Demo/Drivejs'))
const ReactPlx = lazy(()=>import(/* webpackChunkName: "ReactPlx" */ './Demo/React-plx'))
const jsDoc = lazy(()=>import('./Demo/JSDOC'))
const ReactLoadingSkeleton = lazy(()=>import('./Demo/ReactLoadingSkeleton'))
const GoogleOauthLogin = lazy(()=>import('./Demo/Google-auth'))
const ReactRouter = lazy(()=>import('./Demo/react-router'))
const ReactClientValidation = lazy(()=>import('./Demo/ReactClientValidation'))
const Swiper = lazy(()=>import('./Demo/Swiper'))
const HandWrite = lazy(()=>import('./Demo/handWrite'))
// import ReactTable from './Demo/Recat-table/ReactTable'
// import FormikYup from './Demo/Formik-Yup/FormikYup.jsx'
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
import ReactDnd from './Demo/React-dnd'
import ReactTableJob from './Demo/React-table-job'
import JobStyleSaga from './Demo/Job-style-saga'
import SVG from './Demo/SVG'
import ReactSlick from './Demo/React-slick'
import QrCode from './Demo/QRCode'
import Print from './Demo/Print'
import PrintModal from './Demo/PrintModal'
import ReactTablePagination from './Demo/ReactTablePagination'
import UseState from './Demo/Hooks/useState'
import Ref from './Demo/Hooks/useRef'
import UseEffectDemo1 from './Demo/Hooks/useEffect/Demo1'
import UseEffectDemo2 from './Demo/Hooks/useEffect/Demo2'
import FromikSubmit from './Demo/formik isSubmitting vs isvalidating'
import Interview from './Demo/Interview'
import BsColTable from './Demo/BS-Col-Table'
import UseMemo from './Demo/Hooks/useMemo'
import scrollTimeline from './Demo/@scroll-timeline'
import mixBlendMode from './Demo/mix-blend-mode'
import ClipPath from './Demo/Clipath'
import CustomHook from './Demo/Custom-Hook'
import JsBind from './Demo/JsBind.js'
import ThemeProvider from './Demo/ThemeProvider'
import FormTest from './Demo/FormTest'
import PhoneCharging from './Demo/PhoneCharging'
import ReactHookForm from './Demo/React-hook-form'
import theRef from './Demo/Ref'

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
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path='/formik' exact component={Formik}></Route>
              <Route path='/formikyup' exact component={FormikYup}></Route>
              <Route path='/reacttable' exact component={ReactTable}></Route>
              <Route path='/reactintl' exact component={ReactIntl}></Route>
              <Route path='/chart' exact component={Chart}></Route>
              <Route path='/colspan' exact component={Colspan}></Route>
              <Route path='/saga' exact component={Saga}></Route>
              <Route path='/jsx-control' exact component={JsxControl}></Route>
              <Route path='/day-js' exact component={DayJs}></Route>
              <Route path='/formik-2' exact component={Formik2}></Route>
              <Route path='/formik-20' exact component={Formik20}></Route>
              <Route path='/formik-next' exact component={FormikResult}></Route>
              <Route path='/react-modal' exact component={ReactModal}></Route>
              <Route path='/selector-test' exact component={SelectorTest}></Route>
              <Route path='/react-dnd' exact component={ReactDnd}></Route>
              <Route path='/rt-job' exact component={ReactTableJob}></Route>
              <Route path='/js-saga' exact component={JobStyleSaga}></Route>
              <Route path='/svg' exact component={SVG}></Route>
              <Route path='/react-slick' exact component={ReactSlick}></Route>
              <Route path='/qrcode' exact component={QrCode}></Route>
              <Route path='/print' exact component={Print}></Route>
              <Route path='/print-modal' exact component={PrintModal}></Route>
              <Route path='/react-table-pagination' exact component={ReactTablePagination}></Route>
              <Route path='/hooks/useState' exact component={UseState}></Route>
              <Route path='/hooks/useRef' exact component={Ref}></Route>
              <Route path='/hooks/useEffect/Demo1' exact component={UseEffectDemo1}></Route>
              <Route path='/hooks/useEffect/Demo2' exact component={UseEffectDemo2}></Route>
              <Route path='/formik-submit' exact component={FromikSubmit}></Route>
              <Route path='/interview' exact component={Interview}></Route>
              <Route path='/bs-col-table' exact component={BsColTable}></Route>
              <Route path='/hooks/useMemo' exact component={UseMemo}></Route>
              <Route path='/scroll-timeline' exact component={scrollTimeline}></Route>
              <Route path='/mixBlendMode' exact component={mixBlendMode}></Route>
              <Route path='/clip-path' exact component={ClipPath}></Route>
              <Route path='/custom-hook' exact component={CustomHook}></Route>
              <Route path='/bind-js' exact component={JsBind}></Route>
              <Route path='/theme-provider' exact component={ThemeProvider}></Route>
              <Route path='/form-test' exact component={FormTest}></Route>
              <Route path='/phone-charging' exact component={PhoneCharging}></Route>
              <Route path='/react-hook-form' exact component={ReactHookForm}></Route>
              <Route path='/ref' exact component={theRef}></Route>
              <Route path='/frosted-glass' exact component={FrostedGlass}></Route>
              <Route path='/react-query' exact component={ReactQuery}></Route>
              <Route path='/immer' exact component={Immer}></Route>
              <Route path='/redux-toolkit' exact component={ReduxToolkitTest}></Route>
              <Route path='/drive-js' exact component={DriveJs}></Route>
              <Route path='/react-plx' exact component={ReactPlx}></Route>
              <Route path='/js-doc' exact component={jsDoc}></Route>
              <Route path='/react-loading-skeleton' exact component={ReactLoadingSkeleton}></Route>
              <Route path='/google-oauth' exact component={GoogleOauthLogin}></Route>
              <Route path='/react-router' exact component={ReactRouter}></Route>
              <Route path='/react-client-validation' exact component={ReactClientValidation}></Route>
              <Route path='/swiper' exact component={Swiper}></Route>
              <Route path='/hand-write' exact component={HandWrite}></Route>
            </Switch>
          </Suspense>
        </Router>
      </IntlProvider>
    </div>
  )
}
export default App
