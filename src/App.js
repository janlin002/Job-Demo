import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Formik from './Demo/Formik-Yup/Formik'
import ReactTable from './Demo/ReactTable'
import FormikYup from './Demo/Formik-Yup/FormikYup.jsx'
import Header from './Header'


function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Link to="/xxx">xxx</Link> */}
        <Switch>
          <Route path="/formik" exact component={Formik}></Route>
          <Route path="/formikyup" exact component={FormikYup}></Route>
          <Route path="/reacttable" exact component={ReactTable}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
