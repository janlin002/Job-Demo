import flatten from 'flat'

import enLang from './locales/en_US.json'
import twLang from './locales/zh_TW.json'
import cnLang from './locales/zh_CN.json'

const AppLocale = {
  'en-US': flatten(enLang),
  'zh-TW': flatten(twLang),
  'zh-CN': flatten(cnLang),
}

export default AppLocale
