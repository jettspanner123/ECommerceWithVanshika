"use client";
import React from "react";
import { useTheme, GetBackgroundColor } from "./states/Theme";

export default function Home(): React.JSX.Element {
    let {current, toggleTheme, setTheme} = useTheme();

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
            <main style={{ backgroundColor: GetBackgroundColor()}} className="w-screen min-h-screen">
                <button onClick={toggleTheme} className="text-red-300">
                    Click Me
                </button>
            </main>
       </React.Fragment>
    );
}
