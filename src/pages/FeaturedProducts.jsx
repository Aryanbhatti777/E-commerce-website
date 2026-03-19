import React, { useEffect, useState } from "react";
import "../styles/home.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products"
        );
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

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

  if (loading) {
    return (
      <section className="featured-products">
        <div className="featured-header">
          <h2>Featured Products</h2>
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="featured-products">
      <div className="featured-header">
        <h2>Featured Products</h2>
        <p>Explore our popular products</p>
      </div>

      <div className="featured-grid">
        {products.map((item) => (
          <div className="featured-card" key={item.id}>
            <div className="featured-img-box">
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="featured-info">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;