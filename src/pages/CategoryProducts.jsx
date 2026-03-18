import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsBySection } from "../services/Api";

const CategoryProducts = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");
  const [loading, setLoading] = useState(false);

  const categorySections = {
    electronics: [
      { name: "Smartphones", slug: "smartphones" },
      { name: "Laptops", slug: "laptops" }
    ],
    beauty: [
      { name: "Skincare", slug: "skin-care" },
      { name: "Fragrances", slug: "fragrances" }
    ],
    fashion: [
      { name: "Mens Shirts", slug: "mens-shirts" },
      { name: "Mens Shoes", slug: "mens-shoes" },
      { name: "Womens Dresses", slug: "womens-dresses" },
      { name: "Womens Shoes", slug: "womens-shoes" }
    ],
    home: [
      { name: "Furniture", slug: "furniture" },
      { name: "Home Decoration", slug: "home-decoration" }
    ],
    groceries: [
      { name: "Groceries", slug: "groceries" }
    ],
    sports: [
  { name: "Sports Accessories", slug: "sports-accessories" }
]
  };

  const handleSectionClick = async (sectionSlug) => {
    setSelectedSection(sectionSlug);
    setLoading(true);

    const data = await getProductsBySection(sectionSlug);
    setProducts(data);

    setLoading(false);
  };
  console.log("slug:", slug);

  return (
    <div className="cp">
     

      <div className="sections-container">
         <h2>{slug} Sections</h2>
        {categorySections[slug]?.map((section) => (
          <button
            key={section.slug}
            onClick={() => handleSectionClick(section.slug)}
          >
            {section.name}
          </button>
        ))}
      </div>

      <hr />

      

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products-container">
          <h2>{selectedSection && `${selectedSection} Products`}</h2>
          {products.map((pro) => (
            <div key={pro.id} className="product-card">
              <img src={pro.thumbnail} alt={pro.title} width="150" />
              <h3>{pro.title}</h3>
              <p>${pro.price}</p>
              <p>{pro.description}</p>
              <button className=".btn">Add</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;