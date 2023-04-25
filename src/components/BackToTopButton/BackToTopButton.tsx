import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import "./BackToTopButton.scss";

const BackToTopButton: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const checkVisibility = () => {
        const scrollPosition = window.pageYOffset;
        setVisible(scrollPosition > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkVisibility);
        return () => {
            window.removeEventListener("scroll", checkVisibility);
        };
    }, []);

    return (
        <>
            {visible && (
                <div className="buttonContainer">
                    <IconButton onClick={scrollToTop} color="primary">
                        <ArrowUpward />
                    </IconButton>
                </div>
            )}
        </>
    );
};

export default BackToTopButton;
