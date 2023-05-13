import { useMemo } from "react";

interface LoremIpsumProps {
    wordCount: number;
    className?: string;
    style?: React.CSSProperties;
}

const LoremIpsum: React.FC<LoremIpsumProps> = ({
    wordCount,
    className = "",
    style,
}) => {
    const loremIpsum = useMemo(() => {
        const words = [
            "lorem",
            "ipsum",
            "dolor",
            "sit",
            "amet",
            "consectetur",
            "adipiscing",
            "elit",
            "sed",
            "do",
            "eiusmod",
            "tempor",
            "incididunt",
            "ut",
            "labore",
            "et",
            "dolore",
            "magna",
            "aliqua",
        ];
        let text = "";
        for (let i = 0; i < wordCount; i++) {
            const index = Math.floor(Math.random() * words.length);
            text += words[index] + " ";
        }
        return text.trim();
    }, [wordCount]);

    return (
        <span style={style} className={className}>
            {loremIpsum}
        </span>
    );
};

export default LoremIpsum;
