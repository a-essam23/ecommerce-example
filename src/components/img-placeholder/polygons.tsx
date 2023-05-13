import { FC } from "react";

type ImagePlaceholderProps = {
    size?: number;
    points?: number;
};

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
    size = 0.5,
    points = 4,
}) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const pointSpacing = circumference / points;

    const pointsArray = Array.from({ length: points }, (_, i) => i);
    const angleBetweenPoints = 360 / points;
    const initialAngle = Math.floor(Math.random() * 360);

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
                const nextAngle =
                    initialAngle + angleBetweenPoints * ((index + 1) % points);
                const nextX =
                    50 + radius * Math.cos((nextAngle * Math.PI) / 180);
                const nextY =
                    50 + radius * Math.sin((nextAngle * Math.PI) / 180);
                const controlPointX = (nextX + x) / 2;
                const controlPointY = (nextY + y) / 2;
                return (
                    <path
                        key={index}
                        d={`M ${x},${y} Q ${controlPointX},${controlPointY} ${nextX},${nextY}`}
                        fill="none"
                        stroke="#4299e1"
                        strokeWidth="1"
                        style={{
                            transform: `scale(${size})`,
                            transformOrigin: "center",
                        }}
                    />
                );
            })}
        </svg>
    );
};

export default ImagePlaceholder;
