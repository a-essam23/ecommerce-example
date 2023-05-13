import Animate, { AnimateProps } from "@components/animate";
import styles from "./absolute.module.css";
import { FC, ReactNode, useRef } from "react";

export interface AbsoluteContainerProps {
    className?: string;
    img?: string;
    title?: ReactNode;
    random?: boolean;
    position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    children: ReactNode;
    direction?: AnimateProps["direction"];
}

const AbsoluteContainer: FC<AbsoluteContainerProps> = ({
    className = "",
    img = "",
    position = "bottomLeft",
    title,
    random = false,
    children,
    direction,
}) => {
    if (random) {
        const positions: AbsoluteContainerProps["position"][] = [
            "topLeft",
            "topRight",
            "bottomLeft",
            "bottomRight",
        ];
        position =
            positions[Math.floor(Math.random() * positions.length)] ||
            "topLeft";
    }
    return (
        <div
            className={`w-full overflow-hidden h-full p-8 relative ${className}`}
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
            }}
        >
            {title && direction ? (
                <Animate
                    direction={direction}
                    rootMargin={
                        direction.startsWith("t") ? "0px -75%" : "0px 75%"
                    }
                    className={`absolute ${styles[position]}`}
                >
                    {title}
                </Animate>
            ) : (
                <div className={`absolute ${styles[position]}`}>{title}</div>
            )}
            {children}
        </div>
    );
};

export default AbsoluteContainer;
