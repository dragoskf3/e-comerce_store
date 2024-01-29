import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartItemsList() {
  const cartItems = useSelector((store) => store.cartState.cartItems);
  console.log(cartItems);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} {...item} />;
      })}
    </>
  );
}

export default CartItemsList;
