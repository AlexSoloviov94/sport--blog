import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LikedArticlesProvider } from "./contexts/LikedArticlesContext/LikedArticlesContext";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <LikedArticlesProvider>
                    <App />
                </LikedArticlesProvider>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
