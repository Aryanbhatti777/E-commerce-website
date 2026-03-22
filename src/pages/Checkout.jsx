import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";


const Checkout = () => {
  const navigate = useNavigate();

  const checkoutItems =
    JSON.parse(localStorage.getItem("checkoutItems")) || [];
  const checkoutTotal =
    JSON.parse(localStorage.getItem("checkoutTotal")) || 0;

  const placeOrder = () => {
  if (checkoutItems.length === 0) {
    alert("No items to place order");
    return;
  }

  const currentUser = localStorage.getItem("user");

  if (!currentUser) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  const ordersKey = `orders_${currentUser}`;
  const userOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];

  const newOrder = {
    id: Date.now(),
    items: checkoutItems,
    total: checkoutTotal,
    date: new Date().toLocaleString(),
  };

  userOrders.push(newOrder);
  localStorage.setItem(ordersKey, JSON.stringify(userOrders));

  localStorage.removeItem("cart");
  localStorage.removeItem("checkoutItems");
  localStorage.removeItem("checkoutTotal");

  window.dispatchEvent(new Event("cartUpdated"));

  alert("Order placed successfully!");
  navigate("/orders");
};

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h1 className="checkout">Checkout</h1>

      {checkoutItems.length === 0 ? (
        <p>No items available for checkout.</p>
      ) : (
        <>
          {checkoutItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                background: "#fff",
                marginBottom: "15px",
                padding: "15px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "90px", height: "90px", objectFit: "contain" }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>${Number(item.price).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <h2>Total: ${Number(checkoutTotal).toFixed(2)}</h2>

          <button
            onClick={placeOrder}
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              background: "purple",
              color: "white",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;