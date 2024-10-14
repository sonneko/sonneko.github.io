import XIcon from '@mui/icons-material/X';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';

function SocialLinks() {
    return (
        <>
            <List component="nav">
                <ListItemButton component="a" href="/">
                    <ListItemIcon>
                        <XIcon />
                    </ListItemIcon>
                    <ListItemText primary="X" />
                </ListItemButton>
                <ListItemButton component="a" href="https://qiita.com/sonneko">
                    <ListItemIcon>
                        <img src='/image/icons/qiita-icon.png' width={24} height={24} style={{ opacity: "0.75" }} />
                    </ListItemIcon>
                    <ListItemText primary="Qiita" />
                </ListItemButton>
                <ListItemButton component="a" href="https://github.com/sonneko">
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItemButton>
            </List>
        </>
    )
}

export default SocialLinks;