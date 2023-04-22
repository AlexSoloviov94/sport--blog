import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

import Slider from "../../components/Slider/Slider";
import ArticleList from "../../components/ArticleList/ArticleList";
import "./Home.scss"; // Импортируйте файл стилей
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const Home: React.FC = () => {
    const articles = useSelector((state: RootState) => state.articles);

    return (
        <div className="home-page">
            <div className="slider-container">
                <Slider />
            </div>
            <div className="article-list-container">
                <ArticleList articles={articles} />
            </div>
            <BackToTopButton />
        </div>
    );
};

export default Home;
