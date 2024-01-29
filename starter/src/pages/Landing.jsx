import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customInstance } from "../utils";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const response = await customInstance("/products?featured=true");

  const products = response.data.data;
  return products;
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
