## 因為離職要電腦要還原成原廠設定，所以記錄一下我電腦裡面相關的套件

> 記錄時間: 2023/03/30

### Vscode 相關套件

- Auto Close Tag

- Auto Rename Tag

- eslint

- Git Graph

- Git History

- GitLens

- Hightlight Matching Tag

- Image preview

- import cost

- live server

-  Bracket Pair Colorizer

### vscode 設定

```json
// bankpro 應公司需求更改
{
  "workbench.iconTheme": "material-icon-theme",
  "emmet.triggerExpansionOnTab": true,

  // "prettier.singleQuote": true,
  // "prettier.semi": false, // bankpro
  // "prettier.printWidth": 400, // 換行
  // "prettier.tabWidth": 4,
  // "prettier.printWidth": 120,
  // "prettier.proseWrap": "preserve",

  "eslint.validate": ["html", "vue", "javascript", "javascriptreact"],
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html",
    "plaintext": "jade",
    "terminal.integrated.defaultProfile.osx": "zsh"
  },
  "[javascript]": {
    // "editor.defaultFormatter": "vscode.typescript-language-features",
    "editor.defaultFormatter": "dbaeumer.vscode-eslint" // 使用eslint bankpro
    // "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    // "editor.defaultFormatter": "esbenp.prettier-vscode"
    "editor.defaultFormatter": "dbaeumer.vscode-eslint" // 改用eslint
  },
  // "autoprefixer.formatOnSave": false,
  "autoprefixer.formatOnSave": true,
  "explorer.compactFolders": false,
  "workbench.editorAssociations": {
    "*.ipynb": "jupyter-notebook",
    "*.zip": "default"
  },
  "notebook.cellToolbarLocation": {
    "default": "right",
    "jupyter-notebook": "left"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // for eslint
  },
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "editor.formatOnSave": true,
  "terminal.integrated.gpuAcceleration": "off",
  "vetur.validation.template": false,
  "eslint.format.enable": true, // 使用Eslint作为文件的一种格式规范 bamkpro\
  "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/src/assets/css"
    }
  ],
  // power mode
  "powermode.enabled": false, //是否抖動
  "powermode.presets": "fireworks", //動畫效果 -  particle預設 - fireworks 煙火 - magic 爆炸效果

  // todo-tree settings
  "todo-tree.regex.regex": "((//|#|<!--|;|/\\*|^)\\s*($TAGS):|^\\s*- \\[ \\])",
  "todo-tree.general.tags": ["TODO", "FIXME", "tag", "done", "bug"],
  "todo-tree.regex.regexCaseSensitive": false,
  "todo-tree.tree.showInExplorer": true,
  "todo-tree.highlights.defaultHighlight": {
    "foreground": "white",
    "background": "Orange",
    "icon": "checklist",
    "rulerColour": "Orange",
    "type": "tag",
    "iconColour": "Orange"
  },
  "todo-tree.highlights.customHighlight": {
    "FIXME": {
      "background": "red",
      "icon": "beaker",
      "rulerColour": "red",
      "iconColour": "red",
      "opacity": 50
    },
    "tag": {
      "background": "Magenta",
      "icon": "pin",
      "rulerColour": "Magenta",
      "iconColour": "Magenta",
      "rulerLane": "full",
      "opacity": 50
    },
    "done": {
      "background": "DarkTurquoise",
      "icon": "verified",
      "rulerColour": "DarkTurquoise",
      "iconColour": "DarkTurquoise",
      "opacity": 50
    },
    "bug": {
      "background": "green",
      "icon": "bug",
      "rulerColour": "green",
      "iconColour": "green",
      "opacity": 50
    }
  },
  "powermode.shake.enabled": false,
  "dart.flutterSdkPath": "/Users/jan/Desktop/flutter",
  "editor.minimap.enabled": false,
  "git.confirmSync": false,
  "vscode-pets.theme": "castle",
  "vscode-pets.petSize": "medium",
  "vscode-pets.petType": "totoro",
  "vscode-pets.position": "explorer",
  "git.ignoreMissingGitWarning": true,
  "git.path": "/usr/local/bin/git",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.configPath": ".prettierrc.js",
  "editor.formatOnSave": true,
  "editor.stickyScroll.enabled": true,

  // 解決 composes 無法使用問題
  "css.lint.validProperties": ["composes"],
  "chatgpt.gpt3.apiKey": "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",
  "chatgpt.gpt3.organization": "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",
  "[python]": {
    "editor.formatOnType": true
  }
}

```
### 電腦相關的套件(for mac)

- brew

- chrome

- iterm

- 

### chrome 相關擴充

- ColorZilla

- React Developer Tools

- Redux DevTools

- Wappalyzer - Technology profiler

- udemy 中文字幕

### chrome 書籤列

在同層目錄下

### 前端好的資源

[2022 前端工程師學習資源](https://jing-tech.me/blog/2022_frontend_learning)

[稀土掘金](https://juejin.cn/frontend)

[TkDodo's blog](https://tkdodo.eu/blog/)

[joshwcomeau](https://www.joshwcomeau.com/)

[Overreacted](https://overreacted.io/)

[Eric Deng](https://gcdeng.com/)

[builder](https://www.builder.io/blog)

[kentcdodds](https://kentcdodds.com/)

[ExplainThis](https://www.explainthis.io/zh-hant)

[ErrorBaker 技術共筆部落格](https://blog.errorbaker.tw/)

[starbugs](https://starbugs.dev/)

[javascript.info](https://javascript.info/)

[bigfrontend](https://bigfrontend.dev/)

[MDH Weekly](https://mdhweekly.com/weekly)

[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### 待看文章

#### 演算法

https://www.techinterviewhandbook.org/grind75

https://mp.weixin.qq.com/s/DWGWK4yAlfEYO1Ynv1CMfg

https://medium.com/starbugs/%E4%BE%86%E5%BE%81%E6%9C%8D%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95%E5%90%A7-%E9%80%A3-google-%E9%9D%A2%E8%A9%A6%E9%83%BD%E5%9C%A8%E8%80%83%E7%9A%84-binary-tree-ae63c27f5969

https://blog.techbridge.cc/2017/08/19/sotring-algorithm/

https://medium.com/starbugs/%E4%BE%86%E5%BE%81%E6%9C%8D%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95%E5%90%A7-%E9%97%9C%E6%96%BC-linked-list-%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%B4%B9-feat-javascript-ff0ed89c326d

https://chupai.github.io/series/javascript-%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95/

https://juejin.cn/post/6844903971270688781

https://pjchender.blogspot.com/search/label/Algorithm

https://medium.com/frontend-canteen/algorithms-for-front-end-interviews-4aa329bb2ce4

### TS

https://www.youtube.com/watch?v=PL1NUl7fQ2I&list=PLG-Mk4wQm9_LyKE5EwoZz2_GGXR-zJ5Ml

### Others

https://reacttraining.com/blog/hooks-you-probably-dont-need

https://juejin.cn/post/6918602124804915208

https://juejin.cn/post/7175468840476737592

https://kusakawazeusu.medium.com/%E7%94%A8-typescript-%E5%AF%AB-express-route-%E8%88%87-controller-%E7%AF%87-40db4850a8f2

https://juejin.cn/post/6844903830887366670#heading-53

https://juejin.cn/post/6945319439772434469



