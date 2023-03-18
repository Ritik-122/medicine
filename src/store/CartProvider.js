import CartContext from './cart-context'

import React, { useState } from 'react'

export default function CartProvider(props) {
  
    const [items, updateItems] = useState([]);

  const addItem = (item) => {
    let temp=[...items]
    
  
      temp=[...temp,item]
      
  
    updateItems([...temp])
    
    
  };
  
  const state = {
    
    items: items,
    addItem: addItem,

  };
    return (
    <CartContext.Provider  value={state}>{props.children}</CartContext.Provider>
   
  )
}
