import { Button, Card, Layout, Section } from "@components";
import { FC, useEffect, useState } from "react";
import Product from "@components/product";
import { useGenre } from "@context/genreprovider";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePlaceholder from "@hooks/use-placeholder";

const Productspage: FC = () => {
    const { main } = usePlaceholder({
        queries: [{ name: "main", quantity: 30, orientation: "square" }],
    });
    return (
        <Layout>
            <Section padding="sm" size="md">
                <div className="group flex w-full h-12 rounded-primary bg-primary focus-within:border-primary transition-colors text-normal overflow-hidden">
                    <input
                        className="font-tajawal w-full text-neutral h-full outline-none py-1 px-4 bg-transparent placeholder-neutral "
                        placeholder="Search..."
                    />
                    <Button size="md" variant="primary">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </div>
            </Section>
            <Section>
                <Section
                    size="lg"
                    className="gap-6 rounded-primary grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-cols-fr auto-rows-fr"
                >
                    {main &&
                        main.map(({ id, src }, i) => (
                            <Product
                                id={id}
                                image={src?.portrait}
                                price={Math.floor(Math.random() * 100) + 10}
                                name={`Product ${id}`}
                                description=""
                                imgs={src}
                            />
                        ))}
                </Section>
            </Section>
        </Layout>
    );
};

export default Productspage;
