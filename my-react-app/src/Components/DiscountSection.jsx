import React from "react";
import "./DiscountSection.css";
import { FcEngineering } from "react-icons/fc";


const DiscountSection = () => {
  const items = [
    { id: 1, name: "Tomato with Tofu Salad", price: "Rp 97.750,00", originalPrice: "Rp 115.000,00", available: 12, image: "https://saladswithanastasia.com/wp-content/uploads/2021/01/Italian-tomato-salad-featured-1-675x675.jpg" },
    { id: 2, name: "Japanese Chicken Gyoza", price: "Rp 81.700,00", originalPrice: "Rp 96.000,00", available: 8, image: "https://th.bing.com/th/id/OIP.tXQTmQ2osRNjUWmswZpwlQHaE8?w=285&h=190&c=7&r=0&o=5&pid=1.7" },
    { id: 3, name: "2pcs of Amazing Avocado", price: "Rp 68.000,00", originalPrice: "Rp 80.000,00", available: 10, image: "https://th.bing.com/th/id/OIP.QStG4i7KYOx4lXuuSIZXTwHaE8?w=229&h=180&c=7&r=0&o=5&pid=1.7" },
    { id: 4, name: "Lettuce with Stuff", price: "Rp 170.000,00", originalPrice: "Rp 200.000,00", available: 5, image: "https://th.bing.com/th/id/OIP.2ekuIjyP_pY1CYEiOGbJYgHaJg?pid=ImgDet&w=191&h=244&c=7" }
  ];

  return (
    <div className="discount-section">
        <div className="top-section">
          <h1 className="restaurant-name"><FcEngineering />Kans Resto</h1>
        </div>
        <div className="header">
          <h2>Special Discount Today</h2>
            <div className="countdown-box">
            <span className="countdown">Ends in</span> 
          <span className="time">12:10:09</span>
        </div>
      </div>
      <div className="items-container">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            <span className="availability">Available: {item.available}</span>
            <h3 className="item-name">{item.name}</h3>
            <p className="original-price">{item.originalPrice}</p>
            <p className="discounted-price">{item.price}</p>
            <button className="order-button">Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountSection;