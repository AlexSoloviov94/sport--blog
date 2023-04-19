import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import styled from "@emotion/styled";
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

const StyledSlide = styled(SwiperSlide)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px; // Вы можете изменить высоту по своему усмотрению
    width: 100%;
`;

const Slider: React.FC = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop={true}
        >
            <StyledSlide
                style={{ backgroundImage: `url(${Tennsi1})` }}
            ></StyledSlide>
            <StyledSlide
                style={{ backgroundImage: `url(${Football1})` }}
            ></StyledSlide>
            <StyledSlide
                style={{ backgroundImage: `url(${Basketball1})` }}
            ></StyledSlide>
            <StyledSlide
                style={{ backgroundImage: `url(${Tennsi2})` }}
            ></StyledSlide>
            <StyledSlide
                style={{ backgroundImage: `url(${Football2})` }}
            ></StyledSlide>
            <StyledSlide
                style={{ backgroundImage: `url(${Basketball2})` }}
            ></StyledSlide>
            <StyledSlide
                style={{ backgroundImage: `url(${Tennsi3})` }}
            ></StyledSlide>
            <StyledSlide
                style={{ backgroundImage: `url(${Football3})` }}
            ></StyledSlide>
            <StyledSlide style={{ backgroundImage: `url(${Basketball3})` }} />
        </Swiper>
    );
};

export default Slider;
