import { createContext, ReactNode, useContext, useState } from "react";

type GenreContextType = {
    genre: "shoes" | "watch" | "fashion" | "furniture";
    changeGenre: (genreToAdd: GenreContextType["genre"]) => void;
    genres: ["shoes", "watch", "fashion", "furniture"];
};

const GenreContext = createContext<GenreContextType>({
    genre: "watch",
    changeGenre: () => {},
    genres: ["shoes", "watch", "fashion", "furniture"],
});

type GenreProviderProps = {
    children: ReactNode | ReactNode[];
};

export const GenreProvider = ({ children }: GenreProviderProps) => {
    const [currentGenre, setCurrentGenre] = useState<GenreContextType["genre"]>(
        (localStorage.getItem("genre") as GenreContextType["genre"]) || "watch"
    );

    const changeGenre = (genreToAdd: GenreContextType["genre"]) => {
        console.log(genreToAdd);
        if (genreToAdd === currentGenre) return;
        setCurrentGenre(genreToAdd);
        localStorage.setItem("genre", genreToAdd);
    };

    const contextValue: GenreContextType = {
        genre: currentGenre,
        changeGenre,
        genres: ["shoes", "watch", "fashion", "furniture"],
    };

    return (
        <GenreContext.Provider value={contextValue}>
            {children}
        </GenreContext.Provider>
    );
};

export const useGenre = () => useContext(GenreContext);
