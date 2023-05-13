import { ReactNode } from "react";
import { animated, useInView } from "@react-spring/web";

interface AnimateProps {
    children: ReactNode;
    animation?: "fadeInRight" | "fadeInLeft" | "fadeInTop" | "fadeInBottom";
    className?: string;
    delay?: number;
    reset?: boolean;
    once?: boolean;
    rootMargin?: string;
}

const Animate: React.FC<AnimateProps> = ({
    children,
    animation = "fadeInBottom",
    className = "",
    reset = false,
    once = true,
    delay = 0,
    rootMargin = "-35% 0%",
}) => {
    const getAnimation = () => {
        const animations = {
            fadeInRight: {
                from: {
                    opacity: 0,
                    x: 100,
                },
                to: {
                    opacity: 1,
                    x: 0,
                },
            },
            fadeInLeft: {
                from: {
                    opacity: 0,
                    x: -100,
                },
                to: {
                    opacity: 1,
                    x: 0,
                },
            },
            fadeInTop: {
                from: {
                    opacity: 0,
                    y: -100,
                },
                to: {
                    opacity: 1,
                    y: 0,
                },
            },
            fadeInBottom: {
                from: {
                    opacity: 0,
                    y: 100,
                },
                to: {
                    opacity: 1,
                    y: 0,
                },
            },
        };
        let animation_ = animations[animation] || animations["fadeInBottom"];
        console.log({ ...animation_, delay, reset });
        return { ...animation_, delay, reset };
    };

    const [ref, springs] = useInView(() => getAnimation(), {
        once,
        rootMargin,
    });

    return (
        <animated.div
            className={`w-full h-full flex ${className}`}
            style={springs}
            ref={ref}
        >
            {children}
        </animated.div>
    );
};

export default Animate;
