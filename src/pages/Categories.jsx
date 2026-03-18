import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Electronics", slug: "electronics" },
    { name: "Fashion", slug: "fashion" },
    { name: "Beauty", slug: "beauty" },
    { name: "Home & Living", slug: "home" },
    { name: "Groceries", slug: "groceries" },
    { name: "Sports", slug: "sports" }
  ];

  return (
    <div className="categories-page">
      <h2>Shop by Category</h2>

      <div className="categories-container">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            onClick={() => navigate(`/category/${cat.slug}`)}
            className="category-card"
          >
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;