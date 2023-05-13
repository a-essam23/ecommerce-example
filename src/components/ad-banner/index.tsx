import { useCart } from "@context/cartprovider";
import styles from "./ad_banner.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const AdBanner: FC = () => {
    const { cartItems } = useCart();
    return (
        <div className="py-1 box-border sticky top-0 z-20 w-full bg-secondary flex justify-between px-2 items-center h-10 md:h-8">
            <div className="w-6/12 md:w-1/4 xl:w-1/6">
                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    className="flex text-sm text-center font-bungee-hairline text-neutral font-bold"
                    slidesPerView={1}
                    navigation
                    loop
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>HELLO</SwiperSlide>
                    <SwiperSlide>WAIT!</SwiperSlide>
                    <SwiperSlide>Don't leave {":("}</SwiperSlide>
                </Swiper>
            </div>
            <div className="flex gap-1 font-bold font-bungee-hairline items-center">
                <span className="text-neutral text-xs">Free shipping</span>
                <Link
                    to={cartItems.length ? "/cart" : "/products"}
                    className="text-neutral text-sm animate-pulse"
                >
                    order now!
                </Link>
            </div>
        </div>
    );
};

export default AdBanner;
