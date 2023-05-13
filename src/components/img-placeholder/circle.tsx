import { FC } from "react";

type ImagePlaceholderProps = {
    size?: number;
};

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({ size = 0.5 }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absoltue w-full h-full top-0 left-0"
        >
            <circle
                cx="50"
                cy="50"
                r="50"
                fill="#4299e1"
                style={{
                    transform: `scale(${size})`,
                    transformOrigin: "center",
                }}
            />
        </svg>
    );
};

export default ImagePlaceholder;
