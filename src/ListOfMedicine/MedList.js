import React from "react";
import "./MedList.css";
export default function MedList(props) {
  const handleClick = async() => {
    const res=await fetch("https://crudcrud.com/api/3e5a65a0c1ca461281d63b060f860f4d/cartList", {
      method:"POST",
      body: JSON.stringify({
        medName: props.name,
        medDesc: props.desc,
        medPrice: props.price,
      }),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    });
    console.log(res.status)
       
};
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.desc}</td>
        <td>{props.price}</td>
        <td>1</td>
        <td>
          <button className="button-10" onClick={handleClick}>
            Add to Cart
          </button>
        </td>
        
      </tr>
    </>
  );
}
