import React from "react";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { curencyFormater, customInstance } from "../utils";
import { clearCart } from "../features/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const { token } = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: curencyFormater(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customInstance.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      store.dispatch(clearCart());
      toast.success("success");
      return redirect("/orders");
    } catch (error) {}
    return null;
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col fap-y-4">
      <h4 className="font-medium text-xl">shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
