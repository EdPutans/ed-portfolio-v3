"use client";

import React, { useState } from "react";
import Myself from "./Components/MySelf";
import MyStuff from "./Components/MyStuff";
// import './global.css';

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const colorsPerTheme = React.useMemo(() => {
    if (theme === "light") {
      return {
        background: "white",
        color: "#151515",
      };
    }
    return {
      background: "#151515",
      color: "white",
    };
  }, [theme]);

  return (
    <main

      style={{
        maxWidth: 1200,
        margin: "0 auto",
        background: colorsPerTheme.background,
        color: colorsPerTheme.color,
      }}
    >
      <section className="container">
        <div className="left-section">
          <button
            onClick={() => {
              setTheme((prevTheme) => {
                if (prevTheme === "light") {
                  return "dark";
                }
                return "light";
              });
            }}
          >
            {theme === "light" ? "Dark" : "Light"} change!
          </button>
          <MyStuff />
        </div>
        <div className="right-section">
          <Myself />

        </div>
      </section>
    </main>
  );
}
