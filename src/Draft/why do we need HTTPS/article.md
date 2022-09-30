# WHY DO WE NEED HTTPS?

Privacy, integrity, and identification.

## three reasons

隱私、完整性和身份識別。

隱私:
隱私意味著沒有人可以竊聽您的消息。

完整性:
完整性意味著消息在到達目的地的途中沒有被操縱。

身份識別:
識別意味著我可以檢查此消息是否來自發送方

HTTPS 提供了以上幾種功能，稱為: 加密(encryption)

## 加密算法(encryption algorithms)

### symmetric key algorithm.

原理: 會產生一組密鑰，只有擁有密鑰的人，才能讀取訊息，沒有密鑰的人，只會看到一堆亂碼，所以不能跟任何人分享這個密鑰，因為是認鑰匙不認人

不過因為密鑰只有一把，需要很小心，且太過麻煩，所以衍生出另一種形式

### 非對稱密鑰(asymmetric keys)

你將會擁有兩把鑰匙，密鑰(private)跟公鑰(public)，這兩把鑰匙需要一起使用

使用者擁有密鑰跟公鑰，當發送訊息後，後透過公鑰建立一個空間，然後使用手上的密鑰去解析

### The Handshake

瀏覽器與我們託管此網站的服務器進行了通信，並且它們都建立了安全連接以傳輸消息。

如果失敗，會顯示錯誤(紅色的鎖)，如果成功會進入頁面(綠色的鎖)，而瀏覽器與服務器進行通信的過程稱為: 握手(the handshake)

### 握手過程

1. 我們的瀏覽器將 SSL/TLS 版本，跟加密算法傳送給 服務器，這個過程叫 密碼套件(cipher suite)。然後就等服務器回應
2. 服務器會從 SSL/TLS 版本跟加密算法 中挑選最符合自己的一組，然後將 證書(certificate) 跟 公鑰(public key) 傳回給我們的瀏覽器
3. 瀏覽器會去驗證 證書(certificate)，確定是合法的，然後生成 pre-master key ，以便之後生成 unique key，然後用服務器的 公鑰(public key) 去加密 pre-master key ，並回傳給他
4. 服務器使用密鑰去解鎖 pre-master key
5. 握手完成，它們都生成了相同的“共享密鑰”，它們將用作對稱密鑰(symmetric key)。

他們使用非對稱密鑰（公鑰和私鑰）來加密 pre-master key，因此沒有人可以監視它。

### The differences between HTTPS, SSL, and TLS

當 HTTP 需使用 SSL/TLS 加密時，我們稱為 HTTPS

HTTPS = HTTP + SSL/TLS

### SSL

SSL 是 90 年代中期 Netscape 創建的原始協議，現已棄用

### TLS

TLS 是由 IETF 維護的用於 Web 上安全加密的新協議。

### 證書頒發機構(Certificate Authorities)

功用:

1. 頒發證書
2. 確認證書所有者的身份。
3. 提供證書有效的證明。

### Which certificate should you buy?

1. Domain validated
2. Organization validated
3. Extended validation

參考網址:
https://howhttps.works/
