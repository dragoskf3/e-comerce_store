import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customInstance } from "../utils";
import { OrdersList, SectionTitle } from "../components";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.error("you must be logged in");
      return redirect("/login");
    }
    try {
      const response = await customInstance("/orders", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      return response.data;
    } catch (error) {}
    return null;
  };

function Orders() {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle title="No orders" />;
  }
  return (
    <>
      <SectionTitle title="your orders" />
      <OrdersList />
    </>
  );
}

export default Orders;
