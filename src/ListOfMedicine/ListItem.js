import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../ListOfMedicine/List.css";
import MedList from "./MedList";

export default function ListItem({check}) {
 
const [getData,setData]=useState([])
  
  useEffect(() => {
    
    fetch(
      "https://crudcrud.com/api/56de241651e441b48a550051d60989b9/medDetails",
      {
        method: "GET",
      }
    ).then((res) => {
      return res.json().then((data) => {
        console.log(data);
        setData(data)
      });
    });
  }, [check]);
  const showCartItem = getData.map((i) => (
          <MedList name={i.medName} price={i.medPrice} desc={i.medDesc} />
        ));

  return (
    <>
      <Table size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>{showCartItem}</tbody>
      </Table>
      {/* {showlist} */}
    </>
  );
}
