import answer from 'the-answer'
import 'regenerator-runtime/runtime.js'

const action = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(answer)
    }, 3000)
  })
}

const myFunction = async () => {
  const answer = await action()
  console.log(answer)
}

myFunction()

export default myFunction

// https://ithelp.ithome.com.tw/articles/10255453#_=_