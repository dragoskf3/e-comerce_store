import React, { useState } from "react";
import ProdctsGrid from "./ProdctsGrid";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { curencyFormater } from "../utils";
import ProdcutsList from "./ProdcutsList";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { products, meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? `btn-primary text-primary-content`
        : `btn-ghost text-based-content`
    }`;
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md ">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => {
              setLayout("grid");
            }}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => {
              setLayout("list");
            }}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {layout === "grid" ? (
        <div className="pt-12 grid gap-4 md:grid-col-2 lg:grid-cols-3">
          {products.map((item) => {
            const { title, price, image } = item.attributes;
            return (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              >
                <figure className="px-4 pt-4 ">
                  <img
                    src={image}
                    alt={title}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="card-title capitalize tracking-wider">
                    {title}
                  </h2>
                  <span className="text-secondary">
                    {curencyFormater(price)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <ProdcutsList />
      )}
    </>
  );
};

export default ProductsContainer;
