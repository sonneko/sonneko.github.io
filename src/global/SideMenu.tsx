import * as React from 'react';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BookIcon from '@mui/icons-material/Book';
import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';

import SocialLinks from '../components/SocialLinks';
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SideMenu: React.FC = () => {
    return (
        <>
            <List component="nav">
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                    <HomeIcon />
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
            <Box>
                <SocialLinks />
            </Box>
        </>
    );
};

export default SideMenu;