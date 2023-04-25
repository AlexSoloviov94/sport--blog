import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.scss";

import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="app-bar">
                <Toolbar className="toolbar">
                    <RouterLink to="/" style={{ textDecoration: "none" }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className="title"
                        >
                            Sport Blog
                        </Typography>
                    </RouterLink>
                    <div>
                        <Button
                            component={RouterLink}
                            to="/"
                            color="inherit"
                            className="button"
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            onClick={handleClick}
                            className="button"
                        >
                            Categories
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className="menu"
                        >
                            <MenuItem
                                component={RouterLink}
                                to="/categories/Football"
                                onClick={handleClose}
                                className="menu__item"
                            >
                                Football
                            </MenuItem>
                            <MenuItem
                                component={RouterLink}
                                to="/categories/Basketball"
                                onClick={handleClose}
                                className="menu__item"
                            >
                                Basketball
                            </MenuItem>
                            <MenuItem
                                component={RouterLink}
                                to="/categories/Tennis"
                                onClick={handleClose}
                                className="menu__item"
                            >
                                Tennis
                            </MenuItem>
                        </Menu>
                        <Button
                            component={RouterLink}
                            to="/liked-articles"
                            color="inherit"
                            className="button"
                        >
                            Liked Articles
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
