```js
import axios from 'axios'
import {
  tokenInvalidMessageModal,
  forceMessageModal,
} from 'Components/swal'

const reloadPage = () => {
  window.location.reload()
}

export default (() => {
  const instance = axios.create({ baseURL: API_HOST })
  instance.interceptors.request.use((request) => {
    // 多分頁登入檢測
    const localToken = localStorage.getItem('access_token')
    let sessionToken = sessionStorage.getItem('access_token')
    if (localToken !== sessionToken) {
      sessionToken = 'mutipleTabError'
    }
    request.headers.Authorization = `Bearer ${sessionToken}`
    return request
  })
  instance.interceptors.response.use((response) => {
    if (response?.data?.messageid === 'TOKEN_FAIL') {
      tokenInvalidMessageModal(reloadPage)
    }
    return response
  },
  (error) => {
    // 多分頁登入檢測
    const localToken = localStorage.getItem('access_token')
    const sessionToken = sessionStorage.getItem('access_token')
    if (localToken !== sessionToken) {
      tokenInvalidMessageModal(reloadPage)
    }

    if (error.response.status === 409) {
      const id = error.response.data.split('<span><font size="6">')[1].split('<br>')[0]
      forceMessageModal(null, {
        header: '系統錯誤',
        html: `<p>很抱歉，由於未能與系統建立正常的連線服務，請將以下序號提供予本行客服人員，將為您提供協助，敬請見諒！</p><p>查詢序號：${id}</p>`,
        confirm: '確認',
        icon: 'error',
      })
    }
  })
  return instance
})()
```