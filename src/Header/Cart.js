import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CartList from "./CartList";
import CartContext from "../store/cart-context";
export default function Cart() {
  const [show, setShow] = useState(false);
  const [apiData, setData] = useState([]);
  const handleClose = () => setShow(false);
  const CartCtx=useContext(CartContext)
  useEffect(() => {
    fetch('https://crudcrud.com/api/56de241651e441b48a550051d60989b9/cartList',{
      method:"GET",

   }).then((res)=>{
      return res.json().then((data)=>{
          console.log(data)
          setData(data)
      })
   })
  }, [CartCtx.addItem]);

  const handleShow = () => {
    setShow(true);
  };

  const showCart = apiData.map((i) => (
    <CartList name={i.medName} price={i.medPrice} desc={i.medDesc} />
  ));
  const len = apiData.length;
  let l = 0;
  apiData.forEach((i) => (l = l + Number(i.medPrice)));
  
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Cart<sup>{len}</sup>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>List of Purchased Med</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>{showCart}</tbody>
          </Table>
        </Offcanvas.Body>
        <h3>Total price:{l}</h3>
      </Offcanvas>
    </>
  );
}
