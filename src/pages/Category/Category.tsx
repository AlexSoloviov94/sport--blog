// src/pages/Category/Category.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import ArticleList from "../../components/ArticleList/ArticleList";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const CategoryTitle = styled(Typography)`
    margin-bottom: 16px;
`;

const Category: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const allArticles = useSelector((state: RootState) => state.articles);

    const filteredArticles = allArticles.filter(
        (article) => article.category === categoryName
    );

    return (
        <div>
            <CategoryTitle variant="h4">{categoryName}</CategoryTitle>
            <ArticleList articles={filteredArticles} />
        </div>
    );
};

export default Category;
