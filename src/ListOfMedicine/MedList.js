import React,{useContext} from "react";
import CartContext from "../store/cart-context";
import "./MedList.css";
export default function MedList(props) {
  const CartCtx = useContext(CartContext)
  const handleClick = async() => {

    const res=await fetch("https://crudcrud.com/api/56de241651e441b48a550051d60989b9/cartList", {
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
       CartCtx.addItem()
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
