// src/components/ArticleCard/ArticleCard.tsx
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Article } from "../../store/reducers/articles/articlesSlice";

interface ArticleCardProps {
    article: Article;
    onLike?: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onLike }) => {
    const handleLike = () => {
        if (onLike) {
            onLike(article);
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.description}
                </Typography>
                {onLike && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLike}
                    >
                        Like
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default ArticleCard;
