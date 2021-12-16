import logo from "./logo.svg";
import "./App.css";
import React from "react";
const employee = {
  name: "Tom",
  location: "New York",
  bloodGroup: "B+",
  age: 28,
  profileImg: "https://www.w3schools.com/howto/img_avatar.png",
};
function App() {
  return (
    <div>
      <div className="main">
        <img src={employee.profileImg} className="picture" alt="" />
        <h1 className="name">{employee.name}</h1>
        <p className="key">Location</p>
        <p className="value">{employee.location}</p>
        <br />
        <p className="key">Blood group</p>
        <p className="value">{employee.bloodGroup}</p>
        <br />
        <p className="key">Age</p>
        <p className="value">{employee.age}</p>
      </div>
    </div>
  );
}
export default App;
