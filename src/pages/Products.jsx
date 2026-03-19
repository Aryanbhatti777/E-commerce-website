import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/home.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        let url = "https://dummyjson.com/products?limit=100";

        if (searchQuery) {
          url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
            searchQuery
          )}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyExists = cart.find((item) => item.id === product.id);

    if (alreadyExists) {
      alert("Product already added to cart");
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <section className="products-page">
      <h1 className="products-heading">
        {searchQuery ? `Search Results for "${searchQuery}"` : "All Products"}
      </h1>

      {loading ? (
        <p className="loading-text">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-img-box">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <div className="product-info">
                <span className="product-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="product-price">${item.price}</p>
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No products found</p>
      )}
    </section>
  );
};

export default Products;