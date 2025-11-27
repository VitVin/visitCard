import { useEffect, useState } from "react";

const themes = ["blue", "gold"];

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || themes[0]
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const nextTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    return (
        <button onClick={() => { nextTheme(); console.log(theme) }}>

            Current theme: {theme}
        </button>
    );
}
