import { useTheme } from "@context/themeprovider";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { v4 } from "uuid";

export const ThemeManager: FC = () => {
    const { theme, changeTheme, themes } = useTheme();

    return (
        <div className="transition-all duration-200 fixed top-1/3 left-full items-center -translate-x-9 hover:-translate-x-full group z-20 w-fit rounded-full flex">
            <div className="cursor-pointer bg-secondary font-extrabold text-xs flex flex-col text-neutral border-2 border-neutral shadow aspect-square border-r-0 items-center justify-center rounded-l-full p-2">
                <FontAwesomeIcon icon={faPalette} className="text-xl" />
            </div>
            <div className="items-center flex flex-col justify-center gap-2 px-1 py-2 bg-secondary rounded-full border-2 border-neutral">
                {themes.map((_theme) => (
                    <button
                        key={v4()}
                        className={`${_theme}-theme ${
                            _theme === theme
                                ? "border-neutral"
                                : "border-transparent"
                        } border-2 aspect-square w-10 bg-primary rounded-full relative group`}
                        onClick={() => {
                            console.log("CLICKED!", _theme);
                            changeTheme(_theme);
                        }}
                    >
                        <div
                            className={`h-2/4 w-2/4 group-[1]:-hover:animate-growAndFade rounded-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-secondary `}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
