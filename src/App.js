import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./components";
import { commerce } from "./assets/lib/commerce";
import { Card } from "@material-ui/core";
import { CartElement } from "@stripe/react-stripe-js";



const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    
    setProducts(data);
  };
  
  const fetchCart = async () => {
    
    setCart(await commerce.cart.retrieve());
    console.log(cart);
  };
  
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };
  
  useEffect(() => { 
    fetchProducts();
    fetchCart();
  }, []);
  
  console.log();


  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={commerce.cart} />
    </div>
  );
};

export default App;
