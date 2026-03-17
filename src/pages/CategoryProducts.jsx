import React from "react";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { slug } = useParams();

  return (
    <div>
      <h2>{slug} Products</h2>
    </div>
  );
};

export default CategoryProducts;