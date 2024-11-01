// import my css
import "./css/Home.css";

import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import GlobalContext from "../global/globalContext";
import Footer from "../docs/Footer";
import Space from "../components/mini/Space";
import Heading from "../components/mini/heading";
import SocialLinks from "../components/SocialLinks";
import Articles from "../components/Articles";
import HobbyArea from "./components/Home/HobbysArea";

function Header() {
    const globalContext = useContext(GlobalContext)
    const device = globalContext.userDevice;

    const styles = {
        h1: {
            textAlign: 'center' as 'center',
            fontSize: device == "pc" ? "40px" : device == "tablet" ? "35px" : "29px",
            marginBottom: "0"
        },
        img: {
            padding: "0",
            margin: "0",
            border: "1px solid",
            borderRadius: "50%"
        },
        imgDiv: {
            textAlign: "center" as 'center'
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
            <Space size={4} />
            <div style={styles.imgDiv}>
                <img style={styles.img} alt="sonnekoのアイコン" src="/image/icons/sonneko.webp" width={200} height={200} />
            </div>
            <h1 style={styles.h1}>Sonneko’s HP</h1>
            <Typography sx={styles.desc}>
                Sonnekoのしていることを紹介していくホームページ
            </Typography>
            <Space size={1} />
            <div style={styles.buttonWrap}>
                <ButtonGroup size="large" aria-label="Large button group" variant="contained">
                    <Button key="one" sx={styles.button}>自分について</Button>
                    <Button key="two" sx={styles.button}>目次を見る！</Button>
                </ButtonGroup>
            </div>
            <Space size={5} />
        </>
    )
}


function Section({ title, content, customArea }: { title: String, content: String, customArea: React.ReactNode }) {
    return (
        <>
            <Box sx={{ textAlign: "center" as "center", padding: "0 7%", marginBottom: "5rem" }}>
                <Box sx={{ textAlign: "left" as "left" }}>
                    <Heading scale={2}>{title}</Heading>
                    <Box sx={{ textAlign: "left" as "left", paddingLeft: "10px" }}>
                        <Typography>
                            {content}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{textAlign: "left" as "left"}}>
                    {customArea == null ? (
                        <></>
                    ) : (
                        <><Space size={1} />{customArea}</>
                    )}
                </Box>
            </Box>
        </>
    )
}

function Main() {
    return (
        <>
            {[
                {
                    title: "軽く自己紹介",
                    content: "私は、科学全般・数学・情報などに興味を持ち勉強し、趣味としています。基本的に、全て独学です。その趣味の一つであるWeb開発の練習のためにこのサイトを開発しました。",
                    customArea: <></>
                },
                {
                    title: "趣味について",
                    content: "趣味は、基本的に理系のものが多いですが、マイクラという至極一般的な趣味や、城巡りという文系的なものもあり、種類は多岐に渡ります。",
                    customArea: <><HobbyArea /></>
                },
                {
                    title: "SNS",
                    content: "SonnekoのSNS一覧です。ぜひ、フォローお願いいたします。",
                    customArea: <><SocialLinks version="btns"/></>
                },
                {
                    title: "最近の記事",
                    content: "最近の記事をまとめました。ぜひ、ご覧ください。",
                    customArea: <><Articles /></>
                }
            ].map((item) => {
                return (
                    <Section title={item.title} content={item.content} customArea={item.customArea} key={`main-section-${item.title}`} />
                )
            })}
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
            <Main />
            <Footer />
        </>
    )
}

export default Home;