import React from "react";
import { Article } from "../../store/reducers/articles/articlesSlice";
import { useLikedArticles } from "../../contexts/LikedArticlesContext/LikedArticlesContext";
import ArticleCard from "../ArticleCard/ArticleCard";
import styled from "@emotion/styled";

const ArticleListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 16px;
`;

interface ArticleListProps {
    articles: Article[];
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
                    <ArticleCard
                        key={article.id}
                        article={article}
                        truncateDescription={true}
                        isLiked={isLiked}
                        toggleLike={() => toggleLike(article)}
                    />
                );
            })}
        </ArticleListContainer>
    );
};

export default ArticleList;
