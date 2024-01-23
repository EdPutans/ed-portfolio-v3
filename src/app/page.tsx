"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const colorsPerTheme = React.useMemo(() => {
    if (theme === "light") {
      return {
        background: "white",
        color: "#111",
      };
    }
    return {
      background: "#222",
      color: "white",
    };
  }, [theme]);

  return (
    <main
      className={styles.main}
      style={{
        background: colorsPerTheme.background,
        color: colorsPerTheme.color,
      }}
    >
      <section className="container">
        <div className="left-section">
          PenguiN! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Expedita at accusantium vero doloremque assumenda nam placeat, commodi
          neque facere cupiditate quisquam repellendus quidem ea? Fugiat
          doloremque repudiandae odio accusamus nemo. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Expedita at accusantium vero
          doloremque assumenda nam placeat, commodi neque facere cupiditate
          quisquam repellendus quidem ea? Fugiat doloremque repudiandae odio
          accusamus nemo. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Expedita at accusantium vero doloremque assumenda nam placeat,
          commodi neque facere cupiditate quisquam repellendus quidem ea? Fugiat
          doloremque repudiandae odio accusamus nemo. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Expedita at accusantium vero
          doloremque assumenda nam placeat, commodi neque facere cupiditate
          quisquam repellendus quidem ea? Fugiat doloremque repudiandae odio
          accusamus nemo. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Expedita at accusantium vero doloremque assumenda nam placeat,
          commodi neque facere cupiditate quisquam repellendus quidem ea? Fugiat
          doloremque repudiandae odio accusamus nemo. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Expedita at accusantium vero
          doloremque assumenda nam placeat, commodi neque facere cupiditate
          quisquam repellendus quidem ea? Fugiat doloremque repudiandae odio
          accusamus nemo. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Expedita at accusantium vero doloremque assumenda nam placeat,
          commodi neque facere cupiditate quisquam repellendus quidem ea? Fugiat
          doloremque repudiandae odio accusamus nemo. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Expedita at accusantium vero
          doloremque assumenda nam placeat, commodi neque facere cupiditate
          quisquam repellendus quidem ea? Fugiat doloremque repudiandae odio
          accusamus nemo. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Expedita at accusantium vero doloremque assumenda nam placeat,
          commodi neque facere cupiditate quisquam repellendus quidem ea? Fugiat
          doloremque repudiandae odio accusamus nemo.
        </div>
      <div className="right-section">
          bla!

        </div>
        {/* <div style={{flex: 1}}>
invisible?
  
`        </div> */}
      </section>
    </main>
  );
}
