import React from 'react'

const List = props => {
  return <div>{props.list.map((item, index) => props.listRenderer(item, index))}</div>
}

export default List
