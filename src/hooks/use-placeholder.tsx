import { useGenre } from "@context/genreprovider";
import { Axios } from "@utils";
import { useEffect, useState } from "react";

interface Props {
    queries: Array<{
        name: string;
        quantity?: number;
        id?: string;
        orientation?: "landscape" | "portrait" | "square";
    }>;
}

const usePlaceholder = ({ queries }: Props) => {
    const { genre } = useGenre();
    const [data, setData] = useState<{
        [key: string]: [
            {
                id: string;
                src: {
                    original: string;
                    portrait: string;
                    landscape: string;
                };
            }
        ];
    }>({});
    // queries.map(({ name, id, quantity }) => ({
    // [name]: [{ src: { original: "", portrait: "", landscape: "" } }],
    // }))
    useEffect(() => {
        queries.map(({ name, id, quantity, orientation }) => {
            if (quantity)
                Axios.get(
                    `https://api.pexels.com/v1/search?query=${
                        genre === "watch" ? "wrist watch" : genre
                    }&per_page=${quantity}${
                        orientation ? `&orientation=${orientation}` : ""
                    }`,
                    {
                        headers: {
                            Authorization: import.meta.env.VITE_API_KEY,
                        },
                    }
                ).then(({ data, err }) => {
                    setData((prevState) => ({
                        ...prevState,
                        [name]: data.photos,
                    }));
                });
            if (id) {
                Axios.get(`https://api.pexels.com/v1/photos/${id}`, {
                    headers: { Authorization: import.meta.env.VITE_API_KEY },
                }).then(({ data, err }) => {
                    setData((prevState) => ({
                        ...prevState,
                        [name]: [data],
                    }));
                });
            }
        });
    }, [genre]);

    return data;
};

export default usePlaceholder;
