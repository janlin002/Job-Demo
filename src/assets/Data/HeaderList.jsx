import { lazy } from 'react'
const Formik = lazy(()=>import(/* webpackChunkName: "Formik" */'../../Demo/Formik-Yup/Formik'))
const ReactTable = lazy(()=>import(/* webpackChunkName: "ReactTable" */'../../Demo/Recat-table/ReactTable'))
const FormikYup = lazy(()=>import(/* webpackChunkName: "FormikYup" */'../../Demo/Formik-Yup/FormikYup.jsx'))
const FrostedGlass = lazy(()=>import(/* webpackChunkName: "FrostedGlass" */ '../../Demo/FrostedGlass'))
const ReactQuery = lazy(()=>import(/* webpackChunkName: "ReactQuery" */ '../../Demo/React-query'))
const Immer = lazy(()=>import(/* webpackChunkName: "immer" */ '../../Demo/immer'))
const ReduxToolkitTest = lazy(()=>import(/* webpackChunkName: "immer" */ '../../Demo/ReduxToolkitTest'))
const DriveJs = lazy(()=>import(/* webpackChunkName: "DriveJs" */ '../../Demo/Drivejs'))
const ReactPlx = lazy(()=>import(/* webpackChunkName: "ReactPlx" */ '../../Demo/React-plx'))
const jsDoc = lazy(()=>import('../../Demo/JSDOC'))
const ReactLoadingSkeleton = lazy(()=>import('../../Demo/ReactLoadingSkeleton'))
const GoogleOauthLogin = lazy(()=>import('../../Demo/Google-auth'))
const ReactRouter = lazy(()=>import('../../Demo/react-router'))
const ReactClientValidation = lazy(()=>import('../../Demo/ReactClientValidation'))
const Swiper = lazy(()=>import('../../Demo/Swiper'))
const HandWrite = lazy(()=>import('../../Demo/handWrite'))
const ReactCheck = lazy(()=>import('../../Demo/ReactCheck'))
import ReactIntl from '../../Demo/React-intl/react-intl'
import Chart from '../../Demo/Chart/chart'
import Colspan from '../../Demo/colspan/colspan'
import Saga from '../../Demo/checkSaga'
import JsxControl from '../../Demo/jsx-control-statements'
import DayJs from '../../Demo/Dayjs'
import Formik2 from '../../Demo/Formik-Yup/Formik2.jsx'
import Formik20 from '../../Demo/formik2.0'
import FormikResult from '../../Demo/formik2.0/result'
import ReactModal from '../../Demo/React-modal'
import SelectorTest from '../../Demo/SelectorTest'
// import ReactDnd from './Demo/React-dnd'
import ReactTableJob from '../../Demo/React-table-job'
import JobStyleSaga from '../../Demo/Job-style-saga'
import SVG from '../../Demo/SVG'
import ReactSlick from '../../Demo/React-slick'
import QrCode from '../../Demo/QRCode'
import Print from '../../Demo/Print'
import PrintModal from '../../Demo/PrintModal'
import ReactTablePagination from '../../Demo/ReactTablePagination'
import UseState from '../../Demo/Hooks/useState'
import Ref from '../../Demo/Hooks/useRef'
import UseEffectDemo1 from '../../Demo/Hooks/useEffect/Demo1'
import UseEffectDemo2 from '../../Demo/Hooks/useEffect/Demo2'
import FromikSubmit from '../../Demo/formik isSubmitting vs isvalidating'
import Interview from '../../Demo/Interview'
import BsColTable from '../../Demo/BS-Col-Table'
import UseMemo from '../../Demo/Hooks/useMemo'
import scrollTimeline from '../../Demo/@scroll-timeline'
import mixBlendMode from '../../Demo/mix-blend-mode'
import ClipPath from '../../Demo/Clipath'
import CustomHook from '../../Demo/Custom-Hook'
import JsBind from '../../Demo/JsBind.js/index.jsx'
import ThemeProvider from '../../Demo/ThemeProvider'
import FormTest from '../../Demo/FormTest'
import PhoneCharging from '../../Demo/PhoneCharging'
import ReactHookForm from '../../Demo/React-hook-form'
import theRef from '../../Demo/Ref'
import HandSign from '../../Demo/handSign'
import JsPdf from '../../Demo/JsPdf'
import SweetAlert from '../../Demo/SweetAlert'
import Xstate from '../../Demo/xstate/react'
import AutoComplete from '../../Demo/autoComplete'
import InfinityScroll from '../../Demo/infinityScroll'
import ReactDnD from '../../Demo/React-beautiful-dnd'
import ReactCondition from '../../Draft/React-Condition'

const HeaderList = [
  {
    to: 'formik',
    name: 'Formik',
    component: Formik
  },
  {
    to: 'formikyup',
    name: 'FormikYup',
    component: FormikYup
  },
  {
    to: 'reacttable',
    name: 'React-table',
    component: ReactTable
  },
  {
    to: 'reactintl',
    name: 'React-intl',
    component: ReactIntl
  },
  {
    to: 'chart',
    name: 'Chart',
    component: Chart
  },
  {
    to: 'colspan',
    name: 'colspan',
    component: Colspan
  },
  {
    to: 'saga',
    name: 'saga',
    component: Saga
  },
  {
    to: 'jsx-control',
    name: 'jsx-control',
    component: JsxControl
  },
  {
    to: 'day-js',
    name: 'Day.Js',
    component: DayJs
  },
  {
    to: 'formik-2',
    name: 'formik 2.0',
    component: Formik2
  },
  {
    to: 'react-modal',
    name: 'React-modal',
    component: ReactModal
  },
  {
    to: 'selector-test',
    name: 'array-method',
    component: SelectorTest
  },
  {
    to: 'react-dnd',
    name: 'React-dnd',
    component: 'ReactDnd'
  },
  {
    to: 'rt-job',
    name: 'React-table-job',
    component: ReactTableJob
  },
  {
    to: 'js-saga',
    name: 'job-style-saga',
    component: JobStyleSaga
  },
  {
    to: 'svg',
    name: 'svg',
    component: SVG
  },
  {
    to: 'react-slick',
    name: 'react-slick',
    component: ReactSlick
  },
  {
    to: 'qrcode',
    name: 'react-qrcode',
    component: QrCode
  },
  {
    to: 'print',
    name: 'Print',
    component: Print
  },
  {
    to: 'print-modal',
    name: 'Print-Modal',
    component: PrintModal
  },
  {
    to: 'react-table-pagination',
    name: 'ReactTablePagination',
    component: ReactTablePagination
  },
  {
    to: '/hooks/useState',
    name: 'useState',
    component: UseState
  },
  {
    to: '/hooks/useRef',
    name: 'useRef',
    component: Ref
  },
  {
    to: '/hooks/useEffect/Demo1',
    name: 'useEffect Demo1',
    component: UseEffectDemo1
  },
  {
    to: '/hooks/useEffect/Demo2',
    name: 'useEffect Demo2',
    component: UseEffectDemo2
  },
  {
    to: 'formik-submit',
    name: 'formik submit',
    component: FromikSubmit
  },
  {
    to: 'interview',
    name: 'interview',
    component: Interview
  },
  {
    to: 'bs-col-table',
    name: 'bs-col-table',
    component: BsColTable
  },
  {
    to: 'hooks/useMemo',
    name: 'useMemo',
    component: UseMemo
  },
  {
    to: 'scroll-timeline',
    name: 'scrollTimeline',
    component: scrollTimeline
  },
  {
    to: 'mixBlendMode',
    name: 'mixBlendMode',
    component: mixBlendMode
  },
  {
    to: 'clip-path',
    name: 'ClipPath',
    component: ClipPath
  },
  {
    to: 'custom-hook',
    name:'CustomHook',
    component: CustomHook
  },
  {
    to: 'bind-js',
    name: 'JsBind',
    component: JsBind
  },
  {
    to: 'theme-provider',
    name: 'ThemeProvider',
    component: ThemeProvider
  },
  {
    to: 'form-test',
    name: 'form-test',
    component: FormTest
  },
  {
    to: 'phone-charging',
    name: 'phone-charging',
    component: PhoneCharging
  },
  {
    to: 'react-hook-form',
    name: 'react-hook-form',
    component: ReactHookForm
  },
  {
    to: 'ref',
    name: 'ref',
    component: theRef
  },
  {
    to: 'frosted-glass',
    name: 'frosted-glass',
    component: FrostedGlass
  },
  {
    to: 'react-query',
    name: 'react-query',
    component: ReactQuery
  },
  {
    to: 'immer',
    name:'immer',
    component: Immer
  },
  {
    to: 'redux-toolkit',
    name: 'redux-toolkit',
    component: ReduxToolkitTest
  },
  {
    to: 'drive-js',
    name: 'drive-js',
    component: DriveJs
  },
  {
    to: 'react-plx',
    name: 'react-plx',
    component: ReactPlx
  },
  {
    to: 'js-doc',
    name: 'js-doc',
    component: jsDoc
  },
  {
    to: 'react-loading-skeleton',
    name: 'react-loading-skeleton',
    component: ReactLoadingSkeleton
  },
  {
    to: 'google-oauth',
    name: 'google-oauth',
    component: GoogleOauthLogin
  },
  {
    to: 'react-router',
    name:'react-router',
    component: ReactRouter
  },
  {
    to: 'react-client-validation',
    name: 'react-client-validation',
    component: ReactClientValidation
  },
  {
    to: 'swiper',
    name: 'swiper',
    component: Swiper
  },
  {
    to: 'hand-write',
    name: 'hand-write',
    component: HandWrite
  },
  {
    to: 'react-check',
    name: 'react-check',
    component: ReactCheck
  },
  {
    to: 'hand-sign',
    name: 'hand-sign',
    component: HandSign
  },
  {
    to: 'jspdf',
    name: 'jspdf',
    component: JsPdf
  },
  {
    to: 'sweet-alert',
    name: 'sweet-alert',
    component: SweetAlert
  },
  {
    to: 'react-xstate',
    name: 'react-xstate',
    component: Xstate
  },
  {
    to: 'auto-complete',
    name: 'auto-complete',
    component: AutoComplete
  },
  {
    to: 'infinity-scroll',
    name: 'infinity-scroll',
    component: InfinityScroll
  },
  {
    to: 'react-dnd',
    name: 'react-dnd',
    component: ReactDnD
  },
  {
    to: 'react-condition',
    name: 'react-condition',
    component: ReactCondition
  }
]

export default HeaderList