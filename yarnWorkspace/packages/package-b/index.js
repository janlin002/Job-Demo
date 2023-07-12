const random = require('@yarn-wks-ex/package-a')

const createRandomNumberArray = (length = 1) => {
  const array = []
  for(let i = 0; i < length; i++) {
    array.push(random())
  }
  return array
}
module.exports = createRandomNumberArray