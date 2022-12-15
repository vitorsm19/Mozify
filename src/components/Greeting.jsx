import React from "react";
import { useState } from "react";
import "../App.css";

const Greeting = () => {
  const [userName, setUserName] = useState("user");

  return (
    <section id="greeting">
      <div>
        <h3 className="greeting-title">Hello, {userName}!</h3>
        <span className="greeting-subtitle">Check these movies out</span>
      </div>
    </section>
  );
};

export default Greeting;

