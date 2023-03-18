import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import CartList from './CartList';
export default function Cart() {
    const [show, setShow] = useState(false);
    const [apiData,setData]=useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
      
      
       fetch('https://crudcrud.com/api/3e5a65a0c1ca461281d63b060f860f4d/cartList',{
          method:"GET",
  
       }).then((res)=>{
          return res.json().then((data)=>{
              console.log(data)
              setData(data)
          })
       })
      
      
    
    }
  
  const showCart=apiData.map((i)=><CartList
    name={i.medName}
    price={i.medPrice}
    desc={i.medDesc}

  />)
  const len=(apiData.length)
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
      </Offcanvas>
    </>
  )
}
