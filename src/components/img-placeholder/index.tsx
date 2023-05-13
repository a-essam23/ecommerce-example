import { randomInt } from "@utils";
import { FC } from "react";

type ImagePlaceholderProps = {
    size?: number;
    points?: number;
    random?: boolean;
};

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
    size = 0.5,
    points = 3,
    random = false,
}) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const pointSpacing = circumference / points;
    const offset = random ? randomInt(360, -360) / 360 : 1;

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
                const controlPointX = ((nextX + x) / 2) * offset;
                const controlPointY = ((nextY + y) / 2) * offset;
                return (
                    <path
                        key={index}
                        d={`M ${x},${y} Q ${controlPointX},${controlPointY} ${nextX},${nextY}`}
                        // fill="#4299e1"
                        fill="none"
                        fillOpacity={0.5}
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
