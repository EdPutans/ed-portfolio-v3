"use client";

import { DarkModeButton } from "@/app/Components/DarkModeButton";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Myself from "./Components/MySelf";
import MyStuff from "./Components/MyStuff";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  useEffect(() => {
    const body = document.querySelector("body");
    if (prefersDarkMode) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  }, [prefersDarkMode]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <section className="container">
            <div style={{ top: 10, right: 20, position: "fixed", zIndex: 999 }}>
              <DarkModeButton />
            </div>
            <section className="left-section">
              <MyStuff />
            </section>
            <aside className="right-section">
              <Myself />
            </aside>
          </section>
        </main>
      </body>
    </html>
  );
}
