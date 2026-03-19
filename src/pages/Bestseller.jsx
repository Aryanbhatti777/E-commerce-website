import React, { useEffect, useState } from "react";
import "../styles/home.css";

const BestsellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products?limit=12&select=id,title,price,thumbnail,category,rating"
        );
        const data = await res.json();

        const sortedProducts = (data.products || [])
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);

        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching bestseller products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestsellers();
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
      <section className="bestseller-section">
        <div className="section-header">
          <h2>Bestsellers</h2>
          <p>Loading best products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bestseller-section">
      <div className="section-header">
        <h2>Bestsellers</h2>
        <p>Our most loved and top-rated products</p>
      </div>

      <div className="bestseller-grid">
        {products.map((item) => (
          <div className="bestseller-card" key={item.id}>
            <div className="bestseller-img-box">
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="bestseller-info">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
              <p className="rating">⭐ {item.rating}</p>

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

export default BestsellerProducts;