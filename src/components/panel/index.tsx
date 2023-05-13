import Animate, { AnimateProps } from "@components/animate";
import Button from "@components/button";
import AbsoluteContainer, {
    AbsoluteContainerProps,
} from "@components/container/absolute";
import LoremIpsum from "@components/loremipsum";
import { BackgroundLayers } from "@components/svg-background";
import { FC } from "react";

export interface PanelProps {
    title?: string;
    body?: string;
    button?: string;
    imageUrl?: string;
    className?: string;
    reversed?: boolean;
    position?: AbsoluteContainerProps["position"];
    onClick?: () => any;
}

const Panel: FC<PanelProps> = ({
    title,
    body,
    imageUrl = "",
    className = "",
    button = "",
    reversed = false,
    position,
    onClick,
}) => {
    const animationDirections = {
        topLeft: "fadeInLeft",
        topRight: "fadeInTop",
        bottomLeft: "fadeInBottom",
        bottomRight: "fadeInRight",
    };
    return (
        <AbsoluteContainer
            img={imageUrl}
            className="aspect-square text-neutral rounded"
            position={position}
            direction={
                animationDirections[position as keyof PanelProps["position"]]
            }
            title={
                <div className="flex flex-col gap-4 p-8 max-w-sm z-2 rounded">
                    {title ? (
                        <span className="text-h3 font-bungee text-accent">
                            {title}
                        </span>
                    ) : (
                        <LoremIpsum
                            style={{
                                textShadow: "-2px 2px var(--color-neutral)",
                            }}
                            wordCount={3}
                            className="text-h3 font-bungee text-accent"
                        />
                    )}
                    <LoremIpsum
                        wordCount={10}
                        className="text-normal font-bold font-rubik"
                    />
                    <Button
                        variant="secondary"
                        size="md"
                        className="w-max"
                        onClick={onClick}
                    >
                        {button || <LoremIpsum wordCount={2} />}
                    </Button>
                </div>
            }
        >
            <BackgroundLayers
                minOpacity={0.1}
                maxOpacity={0.8}
                reversed={reversed}
                count={24}
                className="z-1"
            />
        </AbsoluteContainer>
    );
};

export default Panel;
