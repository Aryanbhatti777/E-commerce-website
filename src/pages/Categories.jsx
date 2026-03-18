import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import categories from "../services/CategoriesData";

const Categories = () => {
  const Navigate = useNavigate();

  return (
    <section className="categories-page">
      <h2>Shop by Categories</h2>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <h3>{cat.name}</h3>
            <p>{cat.subcategories.length} sections</p>
            <button onClick={() => Navigate(`/category/${cat.slug}`)}>
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Categories;