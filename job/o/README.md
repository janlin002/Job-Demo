# O

## Next 專案

由 Next 搭配 typeScript 所建立而成，css 是透過 Mui 的 styled 去完成

### 資料夾擺放架構 (src)

```
|- api
|- components (畫面架構)
|- hooks
|- layouts (常用的共用Layout)
|- pages (file-basing router)
|- provider (所有邏輯都寫在這裡，然後透過 provider & context 傳遞到 pages 裡面)
|- theme (Mui style theme)
|- types
|- utils
|- views (基本上畫面都在這裡完成，pages 只做 import)
```

### 使用技術

pnpm workspace
