import React from 'react'

export default function CartList(props) {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.desc}</td>
        <td>{props.price}</td>
    </tr>
  )
}
