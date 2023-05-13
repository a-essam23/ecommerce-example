import { useGenre } from "@context/genreprovider";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { v4 } from "uuid";

export const GenreManager: FC = () => {
    const { genre, changeGenre, genres } = useGenre();
    return (
        <div className="transition-all duration-200 fixed top-2/3 left-full items-center -translate-x-9 hover:-translate-x-full group z-20 w-fit rounded-full flex">
            <div className="cursor-pointer bg-primary font-extrabold text-xs flex flex-col text-neutral border-2 border-neutral shadow aspect-square border-r-0 items-center justify-center rounded-l-full p-2 group-hover:bg-secondary">
                <FontAwesomeIcon icon={faBoxArchive} className="text-xl" />
            </div>
            <div className="items-center flex flex-col justify-center gap-2 px-1 py-2 bg-primary rounded-full border-2 border-neutral">
                {genres.map((_genre) => (
                    <button
                        key={v4()}
                        className={`${
                            _genre === genre
                                ? "border-accent"
                                : "border-transparent"
                        } border-2 aspect-square w-10 items-center justify-center flex bg-neutral rounded-full relative group overflow-clip`}
                        onClick={() => {
                            console.log("CLICKED!", _genre);
                            changeGenre(_genre);
                        }}
                    >
                        <img
                            className="w-full h-full bg-neutral p-1 "
                            src={`/assets/${_genre}/${_genre}.svg`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
