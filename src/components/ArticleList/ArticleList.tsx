import React from "react";
import { Article } from "../../store/reducers/articles/articlesSlice";
import { useLikedArticles } from "../../contexts/LikedArticlesContext/LikedArticlesContext";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.scss";

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    const { likedArticles, toggleLike } = useLikedArticles();

    return (
        <div className="ArticleListContainer">
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
        </div>
    );
};

export default ArticleList;
