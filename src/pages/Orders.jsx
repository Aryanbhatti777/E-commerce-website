import React from "react";
import "../styles/orders.css";

const Orders = () => {
  const currentUser = localStorage.getItem("user");
  const ordersKey = `orders_${currentUser}`;
  const orders = JSON.parse(localStorage.getItem(ordersKey)) || [];

  return (
    <div className="orders-page">
      <div className="orders-container">
        <h1 className="orders-title">My Orders</h1>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h2>No orders placed yet</h2>
            <p>Your placed orders will appear here.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <div>
                  <h2>Order #{index + 1}</h2>
                  <p>{order.date}</p>
                </div>
                <h3>Total: ${Number(order.total).toFixed(2)}</h3>
              </div>

              <div className="order-items">
                {order.items.map((item, itemIndex) => (
                  <div className="order-item" key={`${item.id}-${itemIndex}`}>
                    <div className="order-item-image">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>

                    <div className="order-item-details">
                      <h4>{item.title}</h4>
                      <p>${Number(item.price).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;