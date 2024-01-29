import React from "react";
import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.error("you need to be signed in");
    return redirect("/login");
  } else return null;
};

function Checkout() {
  const cartItems = useSelector((store) => store.cartState.cartTotal);
  if (cartItems === 0) {
    return <SectionTitle title="your card is empty" />;
  }
  return (
    <>
      <SectionTitle title="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 item-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
