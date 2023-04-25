import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../../components/CommentSection/CommentSection";
import { Paper, Typography, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Article as ArticleType } from "../../store/reducers/articles/articlesSlice";
import { useLikedArticles } from "../../contexts/LikedArticlesContext/LikedArticlesContext";
import "./Article.scss";

const Article: React.FC = () => {
    const { articleId } = useParams<{ articleId?: string }>();
    const articles = useSelector((state: RootState) => state.articles);

    const { likedArticles, toggleLike } = useLikedArticles();

    if (!articleId) {
        return (
            <div>
                <Typography variant="h4">Статья не найдена</Typography>
            </div>
        );
    }

    const parsedArticleId = parseInt(articleId, 10);
    const article = articles.find((a: ArticleType) => a.id === parsedArticleId);

    const isLiked = likedArticles.some(
        (likedArticle) => likedArticle.id === article?.id
    );

    if (!article) {
        return (
            <div>
                <Typography variant="h4">Статья не найдена</Typography>
            </div>
        );
    }

    return (
        <div>
            <Paper className="article-content">
                <div className="title-container">
                    <Typography variant="h3" className="title">
                        {article.category}
                    </Typography>
                    <Typography variant="h4" className="title">
                        {article.title}
                    </Typography>
                </div>

                <Typography variant="body1" className="description">
                    {article.description}
                </Typography>
                <IconButton
                    onClick={() => toggleLike(article)}
                    color={isLiked ? "primary" : "default"}
                    className="icon-button"
                >
                    {isLiked ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
            </Paper>
            <CommentSection />
        </div>
    );
};

export default Article;
