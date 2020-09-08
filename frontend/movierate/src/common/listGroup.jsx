// imr
import React from 'react'

//sfc
const ListGroup = (props) => {
    console.log(props);
  const { data } = props

  return (
    <ul className="list-group hand">
      {data.map((d) => (
        <li key={d} className="list-group-item">
          {d}
        </li>
      ))}
    </ul>
  )
}

export default ListGroup
