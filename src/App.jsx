import './App.css';
import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { useSelector , Provider } from 'react-redux';

import HeaderList from './assets/Data/HeaderList';
import Header from './Header';
import store from './store';
// import AppLocale from './assets/lang'

/**
 * en, zh, ch
 */

function App() {
  const [locale, setLocale] = useState("zh-TW");
  const lang = useSelector(state=>state.localeLanguage);
  // const locale = navigator.language;
  useEffect(async() => {
    // eslint-disable-next-line no-undef
    const resp = await fetch(`./lang/${lang}.json`);
    const data = await resp.json();

    console.log(data, 'data');
    setLocale(data);
  },[lang]);

  // AppLocale[locale].language

  return (
    <div>
      <Provider store={store}>
        <IntlProvider locale={locale} key={locale} messages={locale}>
          <Router>
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                {
                  [...HeaderList].map((item)=> (
                    <Route path={`/${item.to}`} element={<item.component />} key={item.to}></Route>
                  ))
                }
              </Routes>
            </Suspense>
          </Router>
        </IntlProvider>
      </Provider>
    </div>
  );
}
export default App;
