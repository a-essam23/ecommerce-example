import { ReactNode, RefObject, useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface AnimateProps {
    children: ReactNode;
    direction?: "fadeInRight" | "fadeInLeft" | "fadeInTop" | "fadeInBottom";
    className?: string;
    delay?: number;
    reset?: boolean;
    once?: boolean;
    rootMargin?: string;
    root?: RefObject<Element>;
}

const Animate: React.FC<AnimateProps> = ({
    children,
    direction = "fadeInBottom",
    className = "",
    reset = false,
    once = true,
    delay = 0,
    rootMargin = "0px 35%",
    root,
}) => {
    const ref = useRef(null);
    const getAnimation = () => {
        const animations = {
            fadeInRight: {
                initial: {
                    opacity: 0,
                    x: 100,
                    zIndex: 1,
                },
                animate: {
                    opacity: 1,
                    x: 0,
                    zIndex: 2,
                },
            },
            fadeInLeft: {
                initial: {
                    opacity: 0,
                    x: -100,
                    zIndex: 1,
                },
                animate: {
                    opacity: 1,
                    x: 0,
                    zIndex: 2,
                },
            },
            fadeInTop: {
                initial: {
                    opacity: 0,
                    y: -100,
                    zIndex: 1,
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    zIndex: 2,
                },
            },
            fadeInBottom: {
                initial: {
                    opacity: 0,
                    y: 100,
                    zIndex: 1,
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    zIndex: 2,
                },
            },
        };
        let animation_ = animations[direction] || animations["fadeInBottom"];
        return animation_;
    };
    const inView = useInView(ref, { once, margin: rootMargin, root });

    return (
        <motion.div
            className={`items-center w-max flex ${className}`}
            variants={getAnimation()}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={{
                duration: 0.8,
                delay,
            }}
            ref={ref}
            id="animate"
        >
            {children}
        </motion.div>
    );
};

export default Animate;
