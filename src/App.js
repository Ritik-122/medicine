
import Form from "./Form/Form";
import Header from "./Header/Header";
import ListItem from "./ListOfMedicine/ListItem";
import CartProvider from "./store/CartProvider";
import { useState } from "react";


function App() {

 
const [check,setCheck]=useState(-1)

 
  return (
    
   <>
   <CartProvider>

   <Header/>
  <Form setCheck={setCheck} />
  <ListItem  check={check}/>
  </CartProvider>
 
   </>
  );
}

export default App;
