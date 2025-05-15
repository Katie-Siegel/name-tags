import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Katie" />
    <NameTag name="Snipps" />
    <NameTag name="Anthony" />
    <NameTag name="Roman" />
    <NameTag name="Sarah" />
    <NameTag name="Andie" />
    <NameTag name="Molly" />
    <NameTag name="Serena" />
    <NameTag name="Lita" />
    <NameTag name="Rey" />
    <NameTag name="Amy" />
    <NameTag name="Mina" />
    <NameTag name="Luna" />
    <NameTag name="Artemis" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
