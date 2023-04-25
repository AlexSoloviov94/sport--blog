import React, { useContext } from "react";
import { Typography } from "@mui/material";
import ArticleList from "../../components/ArticleList/ArticleList";
import { LikedArticlesContext } from "../../contexts/LikedArticlesContext/LikedArticlesContext";
import "./LikedArticles.scss";

const LikedArticles: React.FC = () => {
    const context = useContext(LikedArticlesContext);

    return (
        <div className="liked-articles-page">
            <Typography variant="h4" className="liked-articles-title">
                Liked Articles
            </Typography>
            <div className="article-list-container">
                <ArticleList articles={context?.likedArticles || []} />
            </div>
        </div>
    );
};

export default LikedArticles;
