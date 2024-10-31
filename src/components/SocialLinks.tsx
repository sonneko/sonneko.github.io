import XIcon from '@mui/icons-material/X';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';

import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button, IconButton } from '@mui/material';
import { QiitaIcon } from './icons';

function SocialLinks({ version }: { version: 'list' | 'menu' | 'btns' }) {
    if (version == 'list') {
        return (
            <>
                <List component="nav">
                    <ListItemButton component="a" href="https://x.com/sonneko99" target="_blank">
                        <ListItemIcon>
                            <XIcon />
                        </ListItemIcon>
                        <ListItemText primary="X" />
                    </ListItemButton>
                    <ListItemButton component="a" href="https://qiita.com/sonneko" target="_blank">
                        <ListItemIcon>
                            <img src='/image/icons/qiita-icon.png' width={24} height={24} style={{ opacity: "0.75" }} />
                        </ListItemIcon>
                        <ListItemText primary="Qiita" />
                    </ListItemButton>
                    <ListItemButton component="a" href="https://github.com/sonneko" target="_blank">
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </List>
            </>
        )
    }
    else if (version == 'menu') {
        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup size="large" aria-label="Large button group">
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton>
                            <XIcon />
                        </IconButton>
                        <IconButton>
                            <img src='/image/icons/qiita-icon.png' width={24} height={24} style={{ opacity: "0.75" }} />
                        </IconButton>
                    </ButtonGroup>
                </Box>
            </>
        )
    } else if (version == "btns") {
        const buttonStyle = {
            width: "20vw",
            height: "20vw"
        }
        const iconStyle = {
            width: "15vw",
            height: "15vw"
        }
        return (
            <>
                <Box sx={{textAlign: "center" as "center", marginTop: "1rem", opacity: "0.75"}}>
                    <ButtonGroup size="large" color='inherit'>
                        <Button sx={buttonStyle}>
                            <GitHubIcon sx={iconStyle} />
                        </Button>
                        <Button sx={buttonStyle}>
                            <XIcon sx={iconStyle} />
                        </Button>
                        <Button sx={buttonStyle}>
                            <QiitaIcon sx={iconStyle} />
                        </Button>
                    </ButtonGroup>
                </Box>
            </>
        )
    }
}

export default SocialLinks;