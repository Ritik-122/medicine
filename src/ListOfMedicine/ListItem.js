import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import '../ListOfMedicine/List.css'
import MedList from './MedList';
export default function ListItem() {
 const [apiData,setData]=useState([])
    useEffect(() => {
     fetch('https://crudcrud.com/api/3e5a65a0c1ca461281d63b060f860f4d/medDetails',{
        method:"GET",

     }).then((res)=>{
        return res.json().then((data)=>{
            console.log(data)
            setData(data)
        })
     })
    
    },[] )
    const showCartItem=apiData.map((i)=>
    <MedList name={i.medName} price={i.medPrice} desc={i.medDesc} />
    )
    
  return (
    <>
    <Table size="sm" >
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
  )
}
