# CORS
## 同源

同源條件:
- 相同的通訊協定 (protocol)，即 http/https
- 相同的網域 (domain)
- 相同的通訊埠 (port)

## CORS
CORS (Cross-Origin Resource Sharing) 是針對不同源的請求而定的規範，透過 JavaScript 存取非同源資源時，server 必須明確告知瀏覽器允許何種請求，只有 server 允許的請求能夠被瀏覽器實際發送，否則會失敗。

在 CORS 的規範裡面，跨來源請求有分兩種：「簡單」的請求和「非簡單」的請求。

## 「簡單」的請求
### 簡單請求的兩個條件:
1. 只能是 HTTP GET, POST or HEAD 方法
2. 自訂的 request header 只能是 Accept、Accept-Language、Content-Language 或 Content-Type（值只能是 application/x-www-form-urlencoded、multipart/form-data 或 text/plain）。

不符合以上任一條件的請求就是非簡單請求。
## 「非簡單」的請求
### 非簡單請求的兩個條件:
1. HTTP PUT/DELETE 方法
2. Content-Type: application/json 等

不過在非簡單請求之前，會有一個「預檢請求」

### Preflight Request (預檢請求)

Preflight Request會帶有兩個 request header:

Access-Control-Request-Method： 非「簡單」跨來源請求的 HTTP 方法。
Access-Control-Request-Headers 非「簡單」跨來源請求帶有的非「簡單」header。

非簡單請求的Origin
```javascript!
POST /data/
Host: othersite.com
Origin: https://shubo.io
Content-Type: application/json
X-MY-CUSTOM-HEADER: 123
```

Preflight Request:
```javascript!
OPTIONS /data/
Host: othersite.com
Origin: https://shubo.io
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-MY-CUSTOM-HEADER, Content-Type
```

### Preflight Response
回應一樣會有兩個Header

Access-Control-Allow-Methods: 允許的 HTTP 方法。
Access-Control-Allow-Headers: 允許的非「簡單」header。

最後一步，server 還是要回應 Access-Control-Allow-Origin header。

```javascript!
Access-Control-Allow-Origin: https://shubo.io
```

## 解決瀏覽器跨來源請求的流程
### Origin
瀏覽器發送跨來源請求時，會帶一個 Origin header，表示這個請求的來源。

Origin 包含通訊協定、網域和通訊埠三個部分。

從 https://shubo.io 發出的往 https://othersite.com/data 的請求會像這樣：

```javascript
GET /data/
Host: othersite.com
Origin: https://shubo.io
```

### Access-Control-Allow-Origin
當 server 端收到這個跨來源請求時，它可以依據 "Origin"，決定是否要允許這個跨來源請求。

授權的方法是在 response 裡加上 Access-Control-Allow-Origin header：

```javascript!
Access-Control-Allow-Origin: https://shubo.io
```

如果 server 允許任何來源的跨來源請求，那可以直接回 *：
```javascript!
Access-Control-Allow-Origin: *
```

### Access-Control-Expose-Headers
JavaScript 預設可以存取的「簡單」response header 有以下這些：
- Cache-Control
- Content-Language
- Content-Type
- Expires
- Last-Modified
- Pragma

如果要讓 JavaScript 存取其他 header，server 端可以用 Access-Control-Expose-Headers header 設定

## 如何解決CORS問題
1. 透過 伺服器在 HTTP Header 的設定，讓瀏覽器能取得不同來源的資源。
2. Proxy -> 主要是因為會有CORS問題是瀏覽器所為，今天如果透過server來請求的話，就不會有CORS的問題(只要不透過瀏覽器發送請求，自然也就不會有限制。)


```javascript!
server{
  listen 3000;
  server_name localhost;
  location ^~ /api {
  proxy_pass http://localhost:5000;
  }
}
```

https://shubo.io/what-is-cors/
https://ithelp.ithome.com.tw/articles/10226262