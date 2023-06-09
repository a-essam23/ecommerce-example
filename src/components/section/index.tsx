import styles from "./section.module.scss";
import { FC } from "react";
import { SectionProps } from "./section";
import { BackgroundLayers, BackgroundWave } from "@components/svg-background";

const Section: FC<SectionProps> = ({
    Ref,
    children,
    className = "",
    id,
    size,
    style,
    gutter,
    variant,
    padding,
    background,
    backgroundProps,
}) => {
    const backgrounds = {
        wave: <BackgroundWave {...backgroundProps} />,
        layers: <BackgroundLayers {...backgroundProps} />,
    };
    return (
        <section
            ref={Ref}
            id={id}
            style={style}
            className={`relative ${
                background ? "z-0" : "z-1"
            } box-content container--${size || ""} ${
                styles[`gutter--${gutter}`] || ""
            } ${styles[`padding--${padding}`] || ""} ${
                styles[`section--${variant}`] || ""
            } ${className}`}
        >
            {children}
            {background && backgrounds[background]}
        </section>
    );
};

export default Section;
