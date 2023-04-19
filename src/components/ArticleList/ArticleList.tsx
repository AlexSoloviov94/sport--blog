import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useLikedArticles } from "../../contexts/LikedArticlesContext/LikedArticlesContext";
import "./ArticleList.scss";
import { Article } from "../../store/reducers/articles/articlesSlice"; // Используйте импортированный тип

const ArticleListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 16px;
`;

const ArticleCard = styled(Card)`
    margin-bottom: 16px;
`;

// Удалите локальное объявление интерфейса Article

interface ArticleListProps {
    articles: Article[]; // Используйте импортированный тип
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    const { likedArticles, toggleLike } = useLikedArticles();

    return (
        <ArticleListContainer>
            {articles.map((article) => {
                const isLiked = likedArticles.some(
                    (likedArticle) => likedArticle.id === article.id
                );

                return (
                    <ArticleCard key={article.id}>
                        <CardHeader
                            title={
                                <Link to={`/categories/${article.category}`}>
                                    {article.category}
                                </Link>
                            }
                        />
                        <CardContent>
                            <Link to={`/article/${article.id}`}>
                                <Typography variant="h5">
                                    {article.title}
                                </Typography>
                            </Link>
                            <Typography variant="body2">
                                {article.description}
                            </Typography>
                            <IconButton
                                onClick={() => toggleLike(article)}
                                color={isLiked ? "primary" : "default"}
                            >
                                {isLiked ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                        </CardContent>
                    </ArticleCard>
                );
            })}
        </ArticleListContainer>
    );
};

export default ArticleList;
