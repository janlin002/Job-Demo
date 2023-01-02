[原文網址](https://medium.com/onedegree-tech-blog/%E4%BA%86%E8%A7%A3-swr-%E7%9A%84%E9%81%8B%E4%BD%9C%E6%A9%9F%E5%88%B6-how-these-async-state-managers-work-6236fc4f9f6)

SWR = Stale-While-Revalidate(其實源自於 HTTP Cache-Control header 的一個屬性)

意思是: 當第一次發出 request 時，瀏覽器會將回傳的資料存到快取裡，當之後又有相同的 request 時，瀏覽器會優先返回快取的版本，讓使用者可以迅速得到資料或是看到畫面，優化了使用者的體驗，並在 background 驗證快取的資料是不是已經過期，如果需要更新就會抓取最新資料並更新快取，當下次又有請求時就可以拿到剛剛更新過並存到快取的資料。

不管是 SWR, react-query 共同的策略就是:
- 當第一次發出 API 請求時，將 response cache 起來
- 當之後有請求且可以在快取找到資料時，「立即」回傳快取的版本，並在 background 非同步發起 revalidation 請求，並在資料回來時「更新畫面」與快取。