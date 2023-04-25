import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Article from "./pages/Article/Article";
import LikedArticles from "./pages/LikedArticles/LikedArticles";
import { LikedArticlesProvider } from "./contexts/LikedArticlesContext/LikedArticlesContext";
import Footer from "./components/Footer/Footer";
import { Container } from "@mui/material";

const App: React.FC = () => {
    return (
        <LikedArticlesProvider>
            <Router>
                <Header />
                <Container
                    sx={{
                        minHeight: "calc(100vh - 64px - 60px)", // 64px - высота Header, 60px - высота Footer
                        paddingTop: "16px",
                        paddingBottom: "16px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/categories/:categoryName"
                            element={<Category />}
                        />
                        <Route
                            path="/articles/:articleId"
                            element={<Article />}
                        />
                        <Route
                            path="/liked-articles"
                            element={<LikedArticles />}
                        />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </LikedArticlesProvider>
    );
};

export default App;
