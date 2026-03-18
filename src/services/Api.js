import axios from "axios";

export const getProductsBySection = async (sectionSlug) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products/category/${sectionSlug}`
    );
    return res.data.products;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};