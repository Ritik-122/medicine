import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import '../ListOfMedicine/List.css'
import MedList from './MedList';
export default function ListItem() {
 const [apiData,setData]=useState([])
    useEffect(() => {
     fetch('https://crudcrud.com/api/2a36f5428f3d4727bf3aa7062cf926ba/medDetails',{
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
    <Table size="sm">
            <thead>
              <tr>
                
                <th>Item</th>
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
