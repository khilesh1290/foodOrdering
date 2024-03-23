import { useState } from "react";

import "./App.css";

import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/9902999/file/original-de06ad0905f8f51f1e1d0adbf2c4e538.jpg?resize=400x0"
          alt="food-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function RestauractCard(props) {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/khrfn80lujynz1ouvsd2"
        alt="res-logo"
      />
      <h3 className="res-info">{props.resname}</h3>
      <h4 className="res-info">{props.cuizine}</h4>
      <h4 className="res-info">3.9</h4>
      <h4 className="res-info">35min</h4>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestauractCard resname="KFC" cuizine="Burger" />
        <RestauractCard resname="Dominos" cuizine="Pizza" />
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
