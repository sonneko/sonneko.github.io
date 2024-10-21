// import my css
import Heading from "../components/mini/heading";
import "./css/Home.css";
import * as Doc from '../components/doc'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, content }: { title: string, content: string }) {
    return (
        <div style={{ marginTop: "60px" }}>
            <Heading scale={2}>{title}</Heading>
            <p style={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "10px"
            }}>{content}</p>
        </div>
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
        if (paramsStr.length <= 1) {
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
                navigate(targetPath);
            }
        }
    }, [navigate]);

    return (
        <>
            <Doc.Document pageTitle="ホーム" ogpImagePath="/image/const-page/sonneko.png" isIndent={false} isRoutingDisplay={false}>
                <Doc.DocumentWrapper>
                    <div className="title">
                        <Heading scale={1}>Sonnekoのサイト</Heading>
                        <p>Sonnekoが、個人で、遊び半分で作って、完全無料で、運営しているサイトです。</p>
                    </div>
                    <div className="contents">
                        <Card title="Sonnekoって誰？" content="sonnekoは、プログラミング・物理・数学・生物などに興味を持っている高校生です。" />
                        <Card title="何のためにサイトを作ったの？" content="ひとえに、練習のためです。Reactの練習をしたかったのです。また、作ったものを公開する場所としての役割もあります。" />
                        <Card title="最近何してる？" content="c++を勉強しています。Pythonとかでバックエンドもやりたい。" />
                    </div>
                </Doc.DocumentWrapper>
            </Doc.Document>
        </>
    )
}

export default Home;