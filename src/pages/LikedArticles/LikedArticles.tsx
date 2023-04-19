import React, { useContext } from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import ArticleList from "../../components/ArticleList/ArticleList";
import { LikedArticlesContext } from "../../contexts/LikedArticlesContext/LikedArticlesContext";

const LikedArticlesTitle = styled(Typography)`
    margin-bottom: 16px;
`;

const LikedArticles: React.FC = () => {
    const context = useContext(LikedArticlesContext);

    return (
        <div>
            <LikedArticlesTitle variant="h4">Liked Articles</LikedArticlesTitle>
            <ArticleList articles={context?.likedArticles || []} />
        </div>
    );
};

export default LikedArticles;
