"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "cyberpunk" | "nature" | "sunset" | "ocean";

interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
}

export const themes: Record<Theme, ThemeColors> = {
    cyberpunk: {
        primary: "#8b5cf6", // purple-500
        secondary: "#3b82f6", // blue-500
        accent: "#d946ef", // fuchsia-500
    },
    nature: {
        primary: "#10b981", // emerald-500
        secondary: "#06b6d4", // cyan-500
        accent: "#84cc16", // lime-500
    },
    sunset: {
        primary: "#f97316", // orange-500
        secondary: "#ef4444", // red-500
        accent: "#eab308", // yellow-500
    },
    ocean: {
        primary: "#0ea5e9", // sky-500
        secondary: "#6366f1", // indigo-500
        accent: "#06b6d4", // cyan-500
    },
};

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("nature");

    // Load theme from local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme && themes[savedTheme]) {
            setTheme(savedTheme);
        }
    }, []);

    // Update CSS variables when theme changes
    useEffect(() => {
        const colors = themes[theme];
        const root = document.documentElement;

        root.style.setProperty("--primary", colors.primary);
        root.style.setProperty("--secondary", colors.secondary);
        root.style.setProperty("--accent", colors.accent);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
