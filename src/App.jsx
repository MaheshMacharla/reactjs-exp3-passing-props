import React from "react";
import Greeting from "./Greeting";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Passing Props Example</h1>

      {/* Passing props to child */}
      <Greeting message="Hello from Parent!" />
      <Greeting message="Good morning 🌞" />
      <Greeting message="Have a nice day!" />
    </div>
  );
}
