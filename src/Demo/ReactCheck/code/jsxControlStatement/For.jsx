import React from 'react'
import PropTypes from 'prop-types'

const For = ({ of, children }) => {
  return (
    <div>
      {
        of.map((item)=>children(item))
      }
    </div>
  )
}

export default For

For.propTypes = {
  // each: PropTypes.string.isRequired,
  // data: PropTypes.instanceOf(Element).isRequired,
  of: PropTypes.instanceOf(Object).isRequired,
  test: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
}