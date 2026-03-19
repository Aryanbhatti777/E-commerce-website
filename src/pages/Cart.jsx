import React from "react";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    localStorage.setItem("checkoutItems", JSON.stringify(cart));
    localStorage.setItem("checkoutTotal", JSON.stringify(total));

    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <div className="cartitem-container">
        <h1 className="carth">My Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add products to your cart to see them here.</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item, index) => (
                <div className="cartitem-card" key={`${item.id}-${index}`}>
                  <div className="cartitem-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>

                  <div className="cartitem-details">
                    <h3>{item.title}</h3>
                    <p className="cartitem-price">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total: ${total.toFixed(2)}</h2>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;