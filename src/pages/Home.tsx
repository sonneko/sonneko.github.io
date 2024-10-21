// import my css
import "./css/Home.css";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import GlobalContext from "../global/globalContext";

function Header() {
    const globalContext = useContext(GlobalContext)
    const device = globalContext.userDevice;

    const styles = {
        h1: {
            textAlign: 'center' as 'center',
            fontSize: device == "pc" ? "40px" : device == "tablet" ? "35px" : "29px",
            marginBottom: "0"
        },
        imgDiv: {
            textAlign: "center" as 'center',
        },
        desc: {
            textAlign: "center" as 'center',
            fontSize: device == "pc" ? "32px" : device == "tablet" ? "27px" : "22px"
        },
        buttonWrap: {
            textAlign: "center" as 'center',
            margin: "1rem"
        },
        button: {
            padding: device == "phone" ? "" : "1rem 4rem"
        }
    }
    return (
        <>
            <div style={styles.imgDiv}>
                <img alt="sonnekoのアイコン" src="/image/icons/sonneko.png" width={200} height={200} />
            </div>
            <h1 style={styles.h1}>Sonneko’s Site</h1>
            <Typography sx={styles.desc}>
                Sonnekoのしていることを紹介していくホームページ
            </Typography>
            <div style={styles.buttonWrap}>
                <ButtonGroup size="large" aria-label="Large button group" variant="contained">
                    <Button key="one" sx={styles.button}>自分について</Button>
                    <Button key="two" sx={styles.button}>目次を見る！</Button>
                </ButtonGroup>
            </div>
        </>
    )
}


function Home() {

    // URLparameterを参照し、React内でページ遷移
    const navigate = useNavigate();
    useEffect(() => {
        // URL parameter 取得
        const query = window.location.search;
        const paramsStr = query.split('?')

        // パラメータがあったら
        if (!(paramsStr.length <= 1)) {
            // パラメータ取得
            const params = paramsStr[1].split('&').map((item) => {
                const [key, value] = item.split('=');
                return { key: key, value: value };
            });

            // pathパラメータがあれば、そのパスに遷移
            let targetPath: string | null = null;
            params.forEach((item) => {
                if (item.key == 'path') {
                    targetPath = item.value;
                }
            });
            if (targetPath != null) {
                // ページ遷移
                navigate(targetPath);
            }
        }
    }, [navigate]);

    return (
        <>
            <Header />
        </>
    )
}

export default Home;