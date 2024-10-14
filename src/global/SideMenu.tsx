import * as React from 'react';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BookIcon from '@mui/icons-material/Book';
import CodeIcon from '@mui/icons-material/Code';

import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SideMenu: React.FC = () => {
    return (
        <>
            <List component="nav">
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/links">
                    <ListItemIcon>
                    <OpenInNewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Links" />
                </ListItemButton>
                <ListItemButton component={Link} to="/develop">
                    <ListItemIcon>
                    <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Develop" />
                </ListItemButton>
                <ListItemButton component={Link} to="/games">
                    <ListItemIcon>
                    <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Games" />
                </ListItemButton>
                <ListItemButton component={Link} to="/blogs">
                    <ListItemIcon>
                    <BookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blog" />
                </ListItemButton>
            </List>
        </>
    );
};

export default SideMenu;