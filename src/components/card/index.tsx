import LoremIpsum from "@components/loremipsum";
import { Axios } from "@utils";
import React, { ReactNode, useEffect, useState } from "react";
import { v4 } from "uuid";

type CardProps = {
    title?: string;
    body?: string;
    imageUrl?: string;
    footer?: string | ReactNode;
    tags?: string[];
    link?: string;
};

const Card: React.FC<CardProps> = ({
    title,
    body,
    imageUrl = "https://api.lorem.space/image?w=400&h=400",
    footer,
    tags = [],
}) => {
    return (
        <div className="w-full h-full group rounded bg-neutral hover:bg-primary overflow-hidden shadow transition-all duration-200 hover:-translate-y-4">
            <img
                className="w-full max-h-154 object-cover bg-bottom"
                src={imageUrl}
                alt="Card"
            />
            <div className="flex flex-col gap-2 px-6 pt-4">
                {title ? (
                    <div className="text-h3 capitalize text-secondary group-hover:text-accent">
                        {title}
                    </div>
                ) : (
                    <LoremIpsum
                        wordCount={3}
                        className="font-bungee text-h3 capitalize text-secondary group-hover:text-accent"
                    />
                )}
                {body ? (
                    <p className="text-normal group-hover:text-neutral">
                        {body}
                    </p>
                ) : (
                    <LoremIpsum
                        className="font-rubik text-normal group-hover:text-neutral"
                        wordCount={15}
                    />
                )}
            </div>
            {tags.length ? (
                <div className="px-6 pt-4 pb-2">
                    {tags.map((tag) => (
                        <span
                            key={v4()}
                            className="inline-block bg-neutral rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            ) : (
                <></>
            )}
            {typeof footer === "string" ? (
                <div className="px-6 pt-4 pb-2">
                    <span className="text-sm text-gray-600">{footer}</span>
                </div>
            ) : (
                footer
            )}
        </div>
    );
};

export default Card;
