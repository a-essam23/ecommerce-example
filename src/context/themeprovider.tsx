import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
    theme: "reef" | "oasis" | "chocolate" | "commando";
    changeTheme: (themeToAdd: ThemeContextType["theme"]) => void;
    themes: ["reef", "oasis", "chocolate", "commando"];
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "oasis",
    changeTheme: () => {},
    themes: ["reef", "oasis", "chocolate", "commando"],
});

type ThemeProviderProps = {
    children: ReactNode | ReactNode[];
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    // const themes = ["reef", "oasis", "chocolate", "commando"];
    const [currentTheme, setCurrentTheme] = useState<ThemeContextType["theme"]>(
        (localStorage.getItem("theme") as ThemeContextType["theme"]) || "oasis"
    );

    const changeTheme = (themeToAdd: ThemeContextType["theme"]) => {
        console.log(themeToAdd);
        if (themeToAdd === currentTheme) return;
        setCurrentTheme(themeToAdd);
        localStorage.setItem("theme", themeToAdd);
    };

    const contextValue: ThemeContextType = {
        theme: currentTheme,
        changeTheme,
        themes: ["reef", "oasis", "chocolate", "commando"],
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
