import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Tennsi1 from "../../assets/images/Tennis1.jpg";
import Tennsi2 from "../../assets/images/Tennis2.jpg";
import Tennsi3 from "../../assets/images/Tennis3.jpg";
import Football1 from "../../assets/images/Football1.jpg";
import Football2 from "../../assets/images/Football2.jpg";
import Football3 from "../../assets/images/Football3.jpg";
import Basketball1 from "../../assets/images/Basketball1.jpg";
import Basketball2 from "../../assets/images/Basketball2.jpg";
import Basketball3 from "../../assets/images/Basketball3.jpg";
import "./Slider.scss";

const Slider: React.FC = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
        >
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Tennsi1})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Football1})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Basketball1})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Tennsi2})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Football2})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Basketball2})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Tennsi3})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Football3})` }}
            ></SwiperSlide>
            <SwiperSlide
                className="styled-slide"
                style={{ backgroundImage: `url(${Basketball3})` }}
            ></SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    );
};

export default Slider;
