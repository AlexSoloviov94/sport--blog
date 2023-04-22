import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import styled from "@emotion/styled";

const ButtonContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
`;

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
                <ButtonContainer>
                    <IconButton onClick={scrollToTop} color="primary">
                        <ArrowUpward />
                    </IconButton>
                </ButtonContainer>
            )}
        </>
    );
};

export default BackToTopButton;
