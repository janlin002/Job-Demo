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
const GoogleMapReact = lazy(()=>import('../../Demo/GoogleMapReact'))
const ReactIntl = lazy(()=>import('../../Demo/React-intl/react-intl'))
const Chart = lazy(()=>import('../../Demo/Chart/chart'))
const Colspan = lazy(()=>import('../../Demo/colspan/colspan'))
const Saga = lazy(()=>import('../../Demo/checkSaga'))

const JsxControl = lazy(()=>import('../../Demo/jsx-control-statements')) 
const DayJs = lazy(()=>import('../../Demo/Dayjs')) 
const Formik2 = lazy(()=>import('../../Demo/Formik-Yup/Formik2.jsx')) 
const Formik20 = lazy(()=>import('../../Demo/formik2.0')) 
const FormikResult = lazy(()=>import('../../Demo/formik2.0/result')) 
const ReactModal = lazy(()=>import('../../Demo/React-modal')) 
const SelectorTest = lazy(()=>import('../../Demo/SelectorTest')) 
// import ReactDnd from './Demo/React-dnd'
const ReactTableJob = lazy(()=>import('../../Demo/React-table-job')) 
const JobStyleSaga = lazy(()=>import('../../Demo/Job-style-saga')) 
const SVG = lazy(()=>import('../../Demo/SVG')) 
const ReactSlick = lazy(()=>import('../../Demo/React-slick')) 
const QrCode = lazy(()=>import('../../Demo/QRCode')) 
const Print = lazy(()=>import('../../Demo/Print')) 
const PrintModal = lazy(()=>import('../../Demo/PrintModal')) 
const ReactTablePagination = lazy(()=>import('../../Demo/ReactTablePagination')) 
const UseState = lazy(()=>import('../../Demo/Hooks/useState')) 
const Ref = lazy(()=>import('../../Demo/Hooks/useRef')) 
const UseEffectDemo1 = lazy(()=>import('../../Demo/Hooks/useEffect/Demo1')) 
const UseEffectDemo2 = lazy(()=>import('../../Demo/Hooks/useEffect/Demo2')) 
const FromikSubmit = lazy(()=>import('../../Demo/formik isSubmitting vs isvalidating')) 
const Interview = lazy(()=>import('../../Demo/Interview')) 
const BsColTable = lazy(()=>import('../../Demo/BS-Col-Table')) 
const UseMemo = lazy(()=>import('../../Demo/Hooks/useMemo')) 
const scrollTimeline = lazy(()=>import('../../Demo/@scroll-timeline')) 
const mixBlendMode = lazy(()=>import('../../Demo/mix-blend-mode')) 
const ClipPath = lazy(()=>import('../../Demo/Clipath')) 
const CustomHook = lazy(()=>import('../../Demo/Custom-Hook')) 
const JsBind = lazy(()=>import('../../Demo/JsBind.js/index.jsx')) 
const ThemeProvider = lazy(()=>import('../../Demo/ThemeProvider')) 
const FormTest = lazy(()=>import( '../../Demo/FormTest'))
const PhoneCharging = lazy(()=>import('../../Demo/PhoneCharging')) 
const ReactHookForm = lazy(()=>import('../../Demo/React-hook-form')) 
const theRef = lazy(()=>import('../../Demo/Ref')) 
const HandSign = lazy(()=>import('../../Demo/handSign')) 
const JsPdf = lazy(()=>import('../../Demo/JsPdf')) 
const SweetAlert = lazy(()=>import('../../Demo/SweetAlert')) 
const Xstate = lazy(()=>import('../../Demo/xstate/react')) 
const AutoComplete = lazy(()=>import('../../Demo/autoComplete')) 
const InfinityScroll = lazy(()=>import('../../Demo/infinityScroll')) 
const ReactDnD = lazy(()=>import('../../Demo/React-beautiful-dnd')) 
const ReactCondition = lazy(()=>import('../../Draft/React-Condition')) 

const WebDevSimplified = lazy(()=>import('../../WebDevSimplified'))
const CssUnitTest = lazy(()=>import('../../Demo/cssUnitTest'))

const CssPseudo = lazy(()=>import('../../Demo/cssPseudo'))
const CssModule = lazy(()=>import('../../Demo/cssModule'))
const StyledComponent = lazy(()=>import('../../Demo/styledComponent'))
const CssPosition = lazy(()=>import('../../Demo/cssPosition'))

const Prototype = lazy(()=>import('../../Demo/prototype'))
const SWR = lazy(()=>import('../../Demo/SWR'))

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
  },
  {
    to: 'google-map-react',
    name: 'google-map-react',
    component: GoogleMapReact
  },
  {
    to: 'web-dev-simplified',
    name: 'web-dev-simplified',
    component: WebDevSimplified
  },
  {
    to: 'css-unit',
    name: 'css-unit',
    component: CssUnitTest
  },
  {
    to: 'css-pseudo',
    name: 'css-pseudo',
    component: CssPseudo
  },
  {
    to: 'css-module',
    name: 'css-module',
    component: CssModule
  },
  {
    to: 'styled-components',
    name: 'styled-components',
    component: StyledComponent
  },
  {
    to: 'css-position',
    name: 'css-position',
    component: CssPosition
  },
  {
    to: 'prototype',
    name: 'prototype',
    component: Prototype
  },
  {
    to: 'swr',
    name: 'swr',
    component: SWR
  }
]

export default HeaderList