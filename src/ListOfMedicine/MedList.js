import React from 'react'

export default function MedList(props) {
  return (
    <>
        <tr>
            <td>{props.name}</td>
            <td>{props.desc}</td>
            <td>{props.price}</td>
            <td><button>Add to Cart</button></td>
        </tr>
    </>
  )
}
