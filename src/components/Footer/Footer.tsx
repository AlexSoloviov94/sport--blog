import React from "react";
import { IconButton } from "@mui/material";
import { Facebook, LinkedIn, GitHub } from "@mui/icons-material";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <IconButton href="https://www.facebook.com" target="_blank">
                    <Facebook />
                </IconButton>
                <IconButton href="https://www.linkedin.com" target="_blank">
                    <LinkedIn />
                </IconButton>
                <IconButton href="https://www.github.com" target="_blank">
                    <GitHub />
                </IconButton>
            </div>
            <p className="footer__text">&copy; 2023 My Sport Blog</p>
        </footer>
    );
};

export default Footer;
