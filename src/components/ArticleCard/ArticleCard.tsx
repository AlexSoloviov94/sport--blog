import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
} from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useLikedArticles } from "../../contexts/LikedArticlesContext/LikedArticlesContext";
import { Article } from "../../store/reducers/articles/articlesSlice";
import "./ArticleCard.scss";

interface ArticleCardProps {
    article: Article;
    truncateDescription: boolean;
    isLiked: boolean;
    toggleLike: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    article,
    truncateDescription = false,
}) => {
    const { likedArticles, toggleLike } = useLikedArticles();
    const isLiked = likedArticles.some(
        (likedArticle) => likedArticle.id === article.id
    );

    const truncatedDescription = truncateDescription
        ? article.description.slice(0, 150) + "..."
        : article.description;

    return (
        <Card className="article-card">
            <CardHeader
                className="card-header"
                title={
                    <Link to={`/categories/${article.category}`}>
                        {article.category}
                    </Link>
                }
            />
            <CardContent
                className="card-content"
                style={{ paddingBottom: "48px" }}
            >
                <Link to={`/articles/${article.id}`}>
                    <Typography variant="h5">{article.title}</Typography>
                </Link>
                <Typography variant="body2">{truncatedDescription}</Typography>
            </CardContent>
            <div className="like-button-container">
                <IconButton
                    onClick={() => toggleLike(article)}
                    color={isLiked ? "primary" : "default"}
                >
                    {isLiked ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
            </div>
        </Card>
    );
};

export default ArticleCard;
