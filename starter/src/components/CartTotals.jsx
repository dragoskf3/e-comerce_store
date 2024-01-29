import React from "react";
import { useSelector } from "react-redux";
import { curencyFormater } from "../utils";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (store) => store.cartState
  );

  return (
    <div className="card bg-base-200 ">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{curencyFormater(cartTotal)}</span>
        </p>
        {/* Shipping */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{curencyFormater(shipping)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>tax</span>
          <span className="font-medium">{curencyFormater(tax)}</span>
        </p>
        {/* TOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Order total</span>
          <span className="font-medium">{curencyFormater(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}

export default CartTotals;
