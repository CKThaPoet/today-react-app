import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://chanikinsler.wordpress.com/" rel="noopener noreferrer" target="_blank">
            Chani Kinsler
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/wecodeschool/react-weather-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}