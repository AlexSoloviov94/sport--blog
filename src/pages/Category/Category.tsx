import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import ArticleList from "../../components/ArticleList/ArticleList";
import { Typography } from "@mui/material";
import "./Category.scss";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const Category: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const allArticles = useSelector((state: RootState) => state.articles);

    const filteredArticles = allArticles.filter(
        (article) => article.category === categoryName
    );

    return (
        <div className="Category">
            <Typography variant="h4" className="CategoryTitle">
                {categoryName}
            </Typography>
            <ArticleList articles={filteredArticles} />
            <BackToTopButton />
        </div>
    );
};

export default Category;
