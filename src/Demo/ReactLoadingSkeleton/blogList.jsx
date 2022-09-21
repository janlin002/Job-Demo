// normal layout
import React from 'react'
import Card from './card'
import PropTypes from 'prop-types';

const BlogList = ({ list }) =>{
  return (
    <ul className="list">
      {list.items.map((item, index)=>{
        return <Card  item={item} key={index}/>
      })}
    </ul>
  )
}

export default BlogList

BlogList.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired
}