import { FC } from "react";

type ImagePlaceholderProps = {
    size?: number;
    points?: number;
};

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
    size = 0.5,
    points = 6,
}) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const pointSpacing = circumference / points;

    const pointsArray = Array.from({ length: points }, (_, i) => i);
    const angleBetweenPoints = 360 / points;
    const initialAngle = Math.floor(Math.random() * 360);

    const pathData = pointsArray.reduce((acc, _, index) => {
        const angle = initialAngle + angleBetweenPoints * index;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
        const nextAngle =
            initialAngle + angleBetweenPoints * ((index + 1) % points);
        const nextX = 50 + radius * Math.cos((nextAngle * Math.PI) / 180);
        const nextY = 50 + radius * Math.sin((nextAngle * Math.PI) / 180);
        const distance = Math.sqrt((nextX - x) ** 2 + (nextY - y) ** 2);
        const controlPointDistance = distance / 2;
        const controlPointAngle = (angle + nextAngle) / 2;
        const controlPointX =
            50 +
            controlPointDistance *
                Math.cos((controlPointAngle * Math.PI) / 180);
        const controlPointY =
            50 +
            controlPointDistance *
                Math.sin((controlPointAngle * Math.PI) / 180);

        if (index === 0) {
            return `M ${x} ${y} Q ${controlPointX} ${controlPointY} ${nextX} ${nextY}`;
        } else {
            return `${acc} Q ${controlPointX} ${controlPointY} ${nextX} ${nextY}`;
        }
    }, "");

    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute w-full h-full top-0 left-0"
        >
            {pointsArray.map((_, index) => {
                const angle = initialAngle + angleBetweenPoints * index;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                return (
                    <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r={1}
                        fill="#4299e1"
                        style={{
                            transform: `scale(${size})`,
                            transformOrigin: "center",
                        }}
                    />
                );
            })}
            <path
                d={pathData}
                fill="none"
                stroke="#4299e1"
                strokeWidth="1"
                style={{
                    transform: `scale(${size})`,
                    transformOrigin: "center",
                }}
            />
        </svg>
    );
};

export default ImagePlaceholder;
