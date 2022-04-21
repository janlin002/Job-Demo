### [推薦文章](https://juejin.cn/post/6930542093840416776)

### [API 來源](https://chihyang41.github.io/2020/09/07/React-Query-Tutorial/)

### UseQuery

查詢

```js
import { useQuery } from "react-query";

function App() {
  const { data, isLoading, isError } = useQuery("userData", () =>
    axios.get("/api/user")
  );

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### UseMutation

新增,修改,刪除

```js
import { useQuery, queryCache } from "react-query";

function App() {
  const { data, isLoading, isError } = useQuery("userData", () =>
    axios.get("/api/user")
  );
  // 新增用户
  const { mutate } = useMutation((data) => axios.post("/api/user", data));

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button
        onClick={() => {
          mutate({ name: "kasong", age: 99 });
        }}
      >
        创建用户
      </button>
    </ul>
  );
}
```
