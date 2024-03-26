"use client";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
type themeTypes = "light" | "dark";
type contextType = {
    theme: themeTypes;
    changeTheme: () => void;
};
const ThemeContextProvider = createContext<contextType | null>(null);
export default function ThemeSwitcher({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<themeTypes>("light");
    useEffect(() => {
        let theme = window.localStorage.getItem("theme") as null | themeTypes;
        if (theme) {
            setTheme(theme);
            if (theme == "dark") document.documentElement.classList.add("dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // uses the system default theme for the website
            document.documentElement.classList.add("dark");
            setTheme("dark");
        }
    }, []);
    function changeTheme() {
        if (theme == "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark");
        } else if (theme == "dark") {
            setTheme("light");
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light");
        }
    }

    return <ThemeContextProvider.Provider value={{ theme, changeTheme }}>{children}</ThemeContextProvider.Provider>;
}

export function themeState() {
    const context = useContext(ThemeContextProvider);
    if (context == null) throw new Error("Something went wrong in themeContext");
    return context;
}
