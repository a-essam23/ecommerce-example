import { v4 } from "uuid";
import { Animate, Card, Layout, Panel, Section } from "@components";
import { useInView } from "framer-motion";
import { FC, useRef } from "react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SwiperSlide, Swiper } from "swiper/react";
import {
    Autoplay,
    EffectCards,
    EffectFlip,
    Navigation,
    Pagination,
} from "swiper";
import usePlaceholder from "@hooks/use-placeholder";
import { PanelProps } from "@components/panel";
import { useNavigate } from "react-router-dom";
const Homepage: FC = () => {
    const signUpRef = useRef(null);
    const isSignUpVisible = useInView(signUpRef, {
        once: true,
    });
    const navigate = useNavigate();
    const { carosel, panels, cards } = usePlaceholder({
        queries: [
            { name: "carosel", quantity: 3, orientation: "landscape" },
            { name: "panels", quantity: 4, orientation: "portrait" },
            { name: "cards", quantity: 12, orientation: "square" },
        ],
    });
    return (
        <Layout>
            <Section
                variant="primary"
                className="flex overflow-hidden flex-col items-center justify-center relative h-128 sm:h-168 md:h-184 lg:h-116 xl:h-128 2xl:h-216"
            >
                <Swiper
                    modules={[Autoplay, Pagination, EffectFlip]}
                    autoplay={{ delay: 3000 }}
                    slidesPerView={1}
                    effect="flip"
                    flipEffect={{ slideShadows: false }}
                    loop
                    pagination
                    className="w-full h-full"
                >
                    {carosel &&
                        carosel.map(({ src }) => (
                            <SwiperSlide key={v4()} className="w-full h-full">
                                <img
                                    className="w-full h-full object-fill"
                                    src={src?.landscape}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Section>

            <Section size="full" padding="lg">
                <Section
                    className="grid grid-cols-1 md:grid-cols-2 auto-cols-fr md:flex-row gap-12 h-full"
                    size="lg"
                >
                    {panels &&
                        [
                            "topRight",
                            "bottomLeft",
                            "topLeft",
                            "bottomRight",
                        ].map((pos, i) => (
                            <Panel
                                onClick={() => navigate("/products")}
                                position={pos as keyof PanelProps["position"]}
                                imageUrl={
                                    panels.length
                                        ? panels[i]?.src?.portrait
                                        : ""
                                }
                            />
                        ))}
                </Section>
            </Section>

            <Section
                variant="secondary"
                className="flex flex-col relative gap-4"
                padding="lg"
            >
                <Section size="sm" className="text-title flex gap-6 font-rubik">
                    <Animate className="w-full" direction="fadeInLeft">
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="animate-wiggle w-max text-primary"
                        />
                    </Animate>
                    <Animate
                        className="w-full"
                        direction="fadeInRight"
                        delay={0.5}
                    >
                        SIGN UP NOW
                    </Animate>
                </Section>

                <Section
                    Ref={signUpRef}
                    size="md"
                    className="text-h3 font-roboto"
                >
                    {isSignUpVisible && (
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(25)
                                    .pauseFor(200)
                                    .typeString(
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore                        magna aliqua."
                                    )
                                    .start();
                            }}
                        />
                    )}
                </Section>
            </Section>
            <Section
                className=""
                background="wave"
                backgroundProps={{ reversed: true, random: true }}
                padding="lg"
            >
                <div className="flex w-full items-center justify-center">
                    <span className="text-title text-center font-bungee-hairline font-bold">
                        OUR RECOMMENDATION
                    </span>
                </div>

                <Section className="h-1/3 p-4" padding="lg" size="lg">
                    <Swiper
                        className="h-full px-1 pt-4 pb-10 grid auto-cols-fr"
                        modules={[Autoplay, Navigation, Pagination]}
                        slidesPerView={3}
                        navigation
                        spaceBetween={6}
                        slidesPerGroup={3}
                        loop
                        autoplay={{ delay: 2000 }}
                        pagination={{
                            clickable: true,
                            // dynamicBullets: true,
                        }}
                    >
                        {cards &&
                            cards.map(({ src }) => (
                                <SwiperSlide key={v4()}>
                                    <Card imageUrl={src?.portrait} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </Section>
            </Section>
        </Layout>
    );
};

export default Homepage;
