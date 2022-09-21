import './App.css'
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

import HeaderList from './assets/Data/HeaderList'

import Header from './Header'

function App() {
  const [locale, setLocale] = useState("en")
  const lang = useSelector(state=>state.localeLanguage)
  // const locale = navigator.language;
  useEffect(async() => {
    const resp = await fetch(`./lang/${lang}.json`)
    const data = await resp.json()
    setLocale(data)
  },[lang])

  console.log(locale, 'locale')

  return (
    <div>
      <IntlProvider locale={locale} key={locale} messages={locale}>
        <Router>
          <Header />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              {
                [...HeaderList].map((item)=> (
                  <Route path={`/${item.to}`} exact component={item.component} key={item.to}></Route>
                )
                )
              }
            </Switch>
          </Suspense>
        </Router>
      </IntlProvider>
    </div>
  )
}
export default App
