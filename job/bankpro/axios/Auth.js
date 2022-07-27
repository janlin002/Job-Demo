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
    request.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return request
  })
  instance.interceptors.response.use((response) => {
    if (response?.data?.messageid === 'TOKEN_FAIL') {
      tokenInvalidMessageModal(reloadPage)
    }
    return response
  },
  (error) => {
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
