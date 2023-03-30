```js
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

// Create Express Server
const app = express()

// Configuration
const PORT = 8080
const HOST = 'localhost'
// 在陽信用
// 客戶端
// const API_SERVICE_URL = 'https://b2bank-t.sunnybank.com.tw/api'
// 行員端
const API_SERVICE_URL = 'https://ebadm-t.sunnybank.com.tw/backendapi'
// 在公司用
// const API_SERVICE_URL = 'https://isunnytrain.sunnybank.com.tw/api'
// app
// const API_SERVICE_URL = 'https://b2bank-t.sunnybank.com.tw/api'

// 客戶端
// const corsOptions = {
//   origin: 'http://localhost:3008',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }

// 行員端
const corsOptions = {
  origin: 'http://localhost:3010',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
}

// app
// const corsOptions = {
//   origin: 'http://localhost:3009',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }

app.use(cors(corsOptions))

// Proxy endpoints
app.use('/backendapi', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  // eslint-disable-next-line no-unused-vars
  onProxyRes(proxyRes, req, res) {
    // eslint-disable-next-line no-param-reassign
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'
  },
  pathRewrite: {
    '^/backendapi': '',
  },
}))

// Start Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`)
})
```