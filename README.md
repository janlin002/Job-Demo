# Job-Demo

<div>
  <img src="https://img.shields.io/badge/made%20by-janlin002-green" />
  <img src="https://img.shields.io/badge/project%20name-JOB--DEMO-blue" />
</div>

主要是實驗工作上遇到的問題，或是新的套件練習，會以路由為區分的依據，筆記部分會放到[issue](https://github.com/janlin002/Job-Demo/issues)，並以 Label 做區分

react18 測試路徑: src/Demo/React18/vite-project


不定期會在 [Medium](https://medium.com/@123davidbill), [IT邦幫忙](https://ithelp.ithome.com.tw/#_=_) 發表文章

## 優化

1. CRA(Webpack) 轉 vite，速度提升 1 分多鐘

2. router 全部改成 dynamic import，速度提升 474 ms (1052 ms -> 578 ms) -> 2022/12/11 pm 11:49

![image1](./src/assets/image/%E5%84%AA%E5%8C%96/%E6%88%AA%E5%9C%96%202022-12-11%20%E4%B8%8B%E5%8D%8811.45.20.png)

![image2](./src/assets/image/優化/%E6%88%AA%E5%9C%96%202022-12-11%20%E4%B8%8B%E5%8D%8811.46.27.png)

