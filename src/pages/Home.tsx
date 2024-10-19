// import my css
import Heading from "../components/mini/heading";
import "./css/Home.css";
import * as Doc from '../components/doc'

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
    return (
        <>
            <Doc.Document pageTitle="ホーム" ogpImagePath="/image/icons/sonneko.png" isIndent={false} isRoutingDisplay={false}>
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