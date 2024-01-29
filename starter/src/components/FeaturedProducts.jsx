import React from "react";
import SectionTitle from "./SectionTitle";
import ProdctsGrid from "./ProdctsGrid";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle title="featured products" />
      <ProdctsGrid />
    </div>
  );
};

export default FeaturedProducts;
