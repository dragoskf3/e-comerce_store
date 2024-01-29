import React from "react";
import {
  curencyFormater,
  customInstance,
  generateAmountOptions,
} from "../utils";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addItem } from "../features/cartSlice";
import { useDispatch } from "react-redux";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customInstance(`/products/${id}`);
  return { product: response.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleCgangeColor = (color) => {
    setProductColor(color);
  };

  const handChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productId: product.id,
    image,
    title,
    price,
    company,
    amount,
    productColor,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  const priceUpdated = curencyFormater(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li className="capitalize">{title}</li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{priceUpdated}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && `border-2 border-secondary`
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      return handleCgangeColor(color);
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              name="amount"
              id="amount"
              className="select select-secondary select-bordered"
              value={amount}
              onChange={handChangeAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          <div className="mt-10">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
