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
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Sport Blog
                    </Typography>
                    <Button component={RouterLink} to="/" color="inherit">
                        Home
                    </Button>
                    <Button color="inherit" onClick={handleClick}>
                        Categories
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem
                            component={RouterLink}
                            to="/categories/Football"
                            onClick={handleClose}
                        >
                            Football
                        </MenuItem>
                        <MenuItem
                            component={RouterLink}
                            to="/categories/Basketball"
                            onClick={handleClose}
                        >
                            Basketball
                        </MenuItem>
                        <MenuItem
                            component={RouterLink}
                            to="/categories/Tennis"
                            onClick={handleClose}
                        >
                            Tennis
                        </MenuItem>
                    </Menu>
                    <Button
                        component={RouterLink}
                        to="/liked-articles"
                        color="inherit"
                    >
                        Liked Articles
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
