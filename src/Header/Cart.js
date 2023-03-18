import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
export default function Cart() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const q=0
  return (
    <>
 <Button variant="warning" onClick={handleShow}>
        Cart<sup>{q}</sup>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
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
            <tbody></tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
