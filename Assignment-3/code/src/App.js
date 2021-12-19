import React from "react";
import "./App.css";

var arrow = "<";
var rightArrow = ">";
const App = () => {
  return (
    <div className="site-container">
      <div className="OrderDetails">
        <div className="nav">
          <div className="nav-Container">
            <a href="#" className="nav-arrow arrow">
              {arrow}
            </a>
            <h1 className="nav-title">{OrderDetails.name}</h1>
            <span className="nav-text">{OrderDetails.employe}</span>
            <button className="btn nav-btn">Print</button>
          </div>
        </div>

        <div className="container">
          <div className="customer-info block">
            <p className="text">
              <span>Appointment On:</span>
              {props.OrderDetails.appointmenton}
            </p>
            <p className="text">
              <span>Email:</span>
              {props.OrderDetails.email}
            </p>
            <p className="text">
              <span>Phone:</span>
              {props.OrderDetails.phone}
            </p>
            <p className="text">
              <span>Staus:</span>
              {props.OrderDetails.status}
            </p>
            <p className="text">
              <span>Door:</span>
              {props.OrderDetails.Door}
            </p>
            <p className="text">
              <span>Time:</span>
              {props.OrderDetails.Time}
            </p>
          </div>
          <div className="unit one_third">
            <p className="text text-label">Time</p>
          </div>

          <ul className="product-list block">
            <li className="product">
              <label className="img custom-checkbox">
                <input
                  type="checkbox"
                  className="product-input"
                  value="on"
                ></input>
                <span className="custom-checkbox-indicator"></span>
                <img
                  src={props.OrderDetails.avatar}
                  width="100"
                  height="100"
                ></img>
              </label>
              <a href="#" className="product-desc">
                <span className="product-arrow arrow">{rightArrow}</span>
                <div className="product-info">
                  <h3 className="product-title">{props.OrderDetails.title}</h3>
                  <p className="text-help text">
                    {props.OrderDetails.description}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
