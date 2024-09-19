// import my css
import "./css/Home.css";

function Card({ title, content }: { title: string, content: string }) {
    return (
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    )
}

function Home() {
    return (
        <>
            <div className="home">
                <div className="title">
                    <h1>Sonnekoのサイト</h1>
                    <p>Sonnekoが、個人で、遊び半分で作って、完全無料で、運営しているサイトです。</p>
                </div>
                <div className="contents">
                    <Card title="Sonnekoとは誰？" content="sonnekoは、プログラミング・物理・数学・生物などに興味を持っている高校生です。" />
                    <Card title="何のためにサイトを作ったの？" content="ひとえに、練習のためです。Reactの練習をしたかったのです。また、作ったものを公開する場所としての役割もあります。" />
                    <Card title="最近何してる？" content="c++にハマり中です。Pythonとかでバックエンドもやりたい。あと、物理やりたい" />
                </div>
            </div>
        </>
    )
}

export default Home;