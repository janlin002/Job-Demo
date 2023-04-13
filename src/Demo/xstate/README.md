## 使用 Xstate 模擬 Redux-saga 的執行過程

![Redux-saga-data-flow](./redux-saga-data-flow.png)

## xstate 簡易筆記

[xstate 官網連結](https://xstate.js.org/docs/)

xstate 是一個 finite state machine 狀態管理套件

**基礎 xstate**

```javascript = 
{
    target: '',  // 目標位置
    actions: '', // 執行的事情
}
```

**createMachine(config, options)**

- config: machine
- options: 選配

須先使用 `createMachine` 去建立一個基礎的 machine

```javascript = 
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: 'actionFunction'
    }
},
    {
    actions: {
       actionFunction: console.log('123') 
    }
}
);
```

**useMachine**

先略...

**matches**

matches 是指現在的 machine 執行到哪個階段，名稱會跟我們在 createMachine 裡面取的名稱一樣

```javascript =
const promiseMachine = createMachine({
  id: 'promise', // 名稱，方便debug
  initial: 'pending', // 初始值
  states: {
    pending: {
      on: {
        RESOLVE: { target: 'resolved' },
        REJECT: { target: 'rejected' }
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
    }
  }
})

const [state, send] = useMachine(promiseMachine)

state.matches('pending')
state.matches('resolved')
state.matches('rejected')
```

**取得當前狀態**

可透過 `.value` 取得當前狀態

```javascript = 
const [state, send] = useMachine(promiseMachine)

state.value
```

**Invoking Services**

可透過 invoke 去調用其他方法(可以是 machine, Promise, function...)

```javascript = 
const fetchUser = ''// (same as the above example)

const userMachine = createMachine(
  {
    id: 'user',
    states: {
      loading: {
        invoke: {
          src: 'getUser', // 指向 services 裏面的 getUser
          oneDone: {
            target: '',
            actions: ''
          }, // 調用成功執行
          onError: {
            target: '',
            actions: ''
          }  // 調用失敗執行
        }
      },
    }
  },
  services: {
    getUser: (context, event) => fetchUser(context.user.id)
  }
);
```

**entry actions**

[Entry & exit actions](https://stately.ai/docs/actions-and-actors/entry-and-exit-actions)

可讓你在狀態中穿插或是跳脫一個function或是state

```javascript = 
const userMachine = createMachine(
  {
    id: 'user',
    states: {
      loading: {
        entry: ['loginLoading'] // 中間加入 isLoading: true,
        invoke: {
          src: 'getUser', // 指向 services 裏面的 getUser
          oneDone: {
            target: '',
            actions: ''
          }, // 調用成功執行
          onError: {
            target: '',
            actions: ''
          }  // 調用失敗執行
        }
      },
    }
  },
  {
    actions: {
       loginLoading: assign({
        isLoading: true,
      }), 
    }
  }
  services: {
    getUser: (context, event) => fetchUser(context.user.id)
  }
);
```

**assign**
透過 `assign` 可以直接去修改 machine 裡面的 context

```javascript =
{
    actions: {
       loginLoading: assign({
        isLoading: true,
      }), 
    }
}

const [state, send] = useMachine(promiseMachine)
state.context.isLoading // true
```


