import React, { useContext } from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import ArticleList from "../../components/ArticleList/ArticleList";
import { LikedArticlesContext } from "../../contexts/LikedArticlesContext/LikedArticlesContext";
import "./LikedArticles.scss";

const LikedArticlesTitle = styled(Typography)`
    margin-bottom: 16px;
`;

const LikedArticles: React.FC = () => {
    const context = useContext(LikedArticlesContext);

    return (
        <div className="liked-articles-page">
            <LikedArticlesTitle variant="h4">Liked Articles</LikedArticlesTitle>
            <div className="article-list-container">
                <ArticleList articles={context?.likedArticles || []} />
            </div>
        </div>
    );
};

export default LikedArticles;
