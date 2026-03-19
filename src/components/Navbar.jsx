import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem("cart");
      const cart = savedCart ? JSON.parse(savedCart) : [];
      setCount(cart.length);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const Logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <h1 className="logo">My Store</h1>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="searchbar">
            <input type="search" placeholder="Search products..." />
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li className="cart">
            <Link to="/cart">
              <FaShoppingCart size={26} />
              <span>{count}</span>
            </Link>
          </li>

          <li className="user">
            <FaUser />

            {localStorage.getItem("user") ? (
              <div className="dropdown">
                <span>{localStorage.getItem("user")}</span>

                <div className="dropdown-content">
                  <Link to="/profile">My Profile</Link>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/login" onClick={Logout}>
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;