import React, { createContext, useState, useContext } from "react";

interface Article {
    id: number;
    title: string;
    category: string;
    description: string;
}

export interface LikedArticlesState {
    likedArticles: Article[];
    toggleLike: (article: Article) => void;
}

export const LikedArticlesContext = createContext<
    LikedArticlesState | undefined
>(undefined);

interface Props {
    children: React.ReactNode;
}

export const LikedArticlesProvider: React.FC<Props> = ({ children }) => {
    const [likedArticles, setLikedArticles] = useState<Article[]>([]);

    const toggleLike = (article: Article) => {
        const isLiked = likedArticles.some(
            (likedArticle) => likedArticle.id === article.id
        );

        if (isLiked) {
            setLikedArticles(
                likedArticles.filter(
                    (likedArticle) => likedArticle.id !== article.id
                )
            );
        } else {
            setLikedArticles([...likedArticles, article]);
        }
    };

    return (
        <LikedArticlesContext.Provider value={{ likedArticles, toggleLike }}>
            {children}
        </LikedArticlesContext.Provider>
    );
};

export const useLikedArticles = () => {
    const context = useContext(LikedArticlesContext);

    if (!context) {
        throw new Error(
            "useLikedArticles must be used within a LikedArticlesProvider"
        );
    }

    return context;
};
