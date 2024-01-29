import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormChackbox from "./FormChackbox";

function Filters() {
  const { meta } = useLoaderData();

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* CATEGORIES */}
      <FormSelect
        list={meta.categories}
        label="select category"
        size="select-sm"
        name="category"
      />
      {/* COMPANIES */}
      <FormSelect
        list={meta.companies}
        label="select companies"
        size="select-sm"
        name="company"
      />
      {/* ORDERS */}
      <FormSelect
        list={["a-z", "z-a", "high", "low"]}
        label="sort by"
        size="select-sm"
        name="order"
      />
      {/* PRICE */}
      <FormRange name="price" label="select price" />
      {/* Shipping */}
      <FormChackbox name="shipping" label="free shipping" size="checkbox-sm" />
      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}

export default Filters;
