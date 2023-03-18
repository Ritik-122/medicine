import React, { useContext, useRef} from "react";
import "../Form/Form.css";
import CartContext from "../store/cart-context";
export default function Form({setCheck}) {
  const CartCtx=useContext(CartContext)

  const name = useRef("");
  const description = useRef("");
  const price = useRef("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   setCheck(Math.random())
    
    const obj = {
      id:name.current.value+price.current.value,
      medName: name.current.value,
      medDesc: description.current.value,
      medPrice: price.current.value,
    };
    CartCtx.addItem({...obj})
    const res = await fetch(
      "https://crudcrud.com/api/56de241651e441b48a550051d60989b9/medDetails",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
     console.log(res.status) 
    
    name.current.value=''
    description.current.value=''
    price.current.value=''
     

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input ref={name} />
        <label>Description:</label>
        <input ref={description} />
        <label>Price:</label>
        <input ref={price} />
        <button className="button-10" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
