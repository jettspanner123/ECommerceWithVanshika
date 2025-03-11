"use client";
import React from "react";
import { useTheme, ThemeOption } from "./states/Theme";
import Navbar from "./components/Navbar";

export default function Home(): React.JSX.Element {
  React.useEffect(() => {
    (async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      const LocomotiveScroll = new locomotiveScroll();
    })();
  }, []);

  let { current, toggleTheme, setTheme } = useTheme();

  React.useEffect(() => {
    let isThemeAvailable = window.localStorage.getItem("theme");
    if (isThemeAvailable) {
      setTheme(isThemeAvailable);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("theme", current);
  }, [current]);

  return (
    <React.Fragment>
      <main
        style={{
          backgroundColor: current === ThemeOption.light ? "white" : "black",
          color: current === ThemeOption.light ? "black" : "white",
        }}
        className="min-h-screen w-screen"
      >
        <Navbar />
        <button onClick={toggleTheme}>clikc me</button>
      </main>
    </React.Fragment>
  );
}
