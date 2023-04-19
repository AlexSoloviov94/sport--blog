// src/pages/Category/Category.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import ArticleList from "../../components/ArticleList/ArticleList";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import "./Category.scss";

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
        <div className="Category">
            <CategoryTitle variant="h4" className="CategoryTitle">
                {categoryName}
            </CategoryTitle>
            <ArticleList articles={filteredArticles} />
        </div>
    );
};

export default Category;
