"use client";
import { themeState } from "@/context/themeContext";
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

export default function ThemeSwitcher() {
    const { changeTheme, theme } = themeState();
    return (
        <button type="button" className="fixed  bottom-6 right-6 sm:bottom-8 sm:right-8 bg-opacity-50 bg-white p-3 rounded-full border border-black/10 shadow-lg transition-all backdrop-blur-[0.5rem] hover:scale-[1.15] active:scale-105 dark:bg-gray-950 dark:border-white/40" onClick={changeTheme}>
            {theme == "light" ? <FaSun className="text-xl" /> : <FaRegMoon className="text-xl" />}
        </button>
    );
}
