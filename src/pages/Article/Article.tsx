import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../../components/CommentSection/CommentSection";
import { Paper, Typography, IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import styled from "@emotion/styled";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Article as ArticleType } from "../../store/reducers/articles/articlesSlice";
import { useLikedArticles } from "../../contexts/LikedArticlesContext/LikedArticlesContext";

const ArticleContent = styled(Paper)`
    padding: 16px;
    margin-bottom: 16px;
`;

const Article: React.FC = () => {
    const { articleId } = useParams<{ articleId?: string }>();
    const articles = useSelector((state: RootState) => state.articles);
    const article = articles.find(
        (a: ArticleType) => a.id === (articleId ? parseInt(articleId, 10) : -1)
    );

    const { likedArticles, toggleLike } = useLikedArticles();
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
            <ArticleContent>
                <Typography variant="h3">{article.category}</Typography>
                <Typography variant="h4">{article.title}</Typography>
                <IconButton
                    onClick={() => toggleLike(article)}
                    color={isLiked ? "primary" : "default"}
                >
                    {isLiked ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <Typography variant="body1">{article.description}</Typography>
            </ArticleContent>
            <CommentSection />
        </div>
    );
};

export default Article;
