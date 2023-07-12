const _ = require('lodash')
const random = () => {
  return _.random(1, 100, false)
}
module.exports = random