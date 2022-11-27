import React from "react";
import { useState } from "react";
import "../App.css";

const Greeting = () => {

    const [userName, setUserName] = useState("my future colleagues");
    
  return (
    <section id="greeting">

        <h3 className="greeting-title">Hello, {userName}!</h3>
        <span className="greeting-subtitle">Check these movies out</span>

    </section>
  );
};

export default Greeting;
