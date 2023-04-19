import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Article from "./pages/Article/Article";
import LikedArticles from "./pages/LikedArticles/LikedArticles";
import { LikedArticlesProvider } from "./contexts/LikedArticlesContext/LikedArticlesContext";

const App: React.FC = () => {
    return (
        <LikedArticlesProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/categories/:categoryName"
                        element={<Category />}
                    />
                    <Route path="/articles/:articleId" element={<Article />} />
                    <Route path="/liked-articles" element={<LikedArticles />} />
                </Routes>
            </Router>
        </LikedArticlesProvider>
    );
};

export default App;
