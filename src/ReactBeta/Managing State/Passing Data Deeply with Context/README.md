[官網網址](https://beta.reactjs.org/learn/passing-data-deeply-with-context#step-1-create-the-context)

props 太過於攏長與不方便，所以我們可以改使用 context

> you have to pass them through many components in the middle

> Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

這章節在介紹 React 中的 context

```js
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
```

上方的程式碼，會傳遞很多的 props

改成下面這樣，可以減少props傳遞次數

```js
<Section level={3}>
  <Heading>About</Heading>
  <Heading>Photos</Heading>
  <Heading>Videos</Heading>
</Section>
```

這邊就是需要到 context

context 的步驟
1. Create a context. (You can call it LevelContext, since it’s for the heading level.)
2. Use that context from the component that needs the data. (Heading will use LevelContext.)
3. Provide that context from the component that specifies the data. (Section will provide LevelContext.)

## Create a context.

```js
import { createContext } from 'react';

export const LevelContext = createContext(1);
```

透過 `createContext` 來創建 context

## Use the context

```js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // ...
}
```

透過 `useContext` 來調用 context 的內容


## Provide the context

```js
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

透過 `Provider` 向下傳遞