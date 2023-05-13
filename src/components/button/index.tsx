import styles from "./button.module.scss";
import { ButtonProps } from "./button";
import { FC } from "react";

const Button: FC<ButtonProps> = ({
    children,
    className = "",
    onClick,
    hrefType = "button",
    id,
    style,
    size = "",
    variant = "",
}) => {
    return (
        <button
            id={id}
            style={style}
            type={hrefType}
            onClick={onClick}
            className={`items-center text-center transition-colors ${
                styles[size] || ""
            } ${styles[variant] || ""} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
