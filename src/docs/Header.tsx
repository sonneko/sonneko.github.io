function Header() {
    return (
        <header>
            <div className="title">
                <h1>Sonnekoのサイト</h1>
                <nav className="navigation">
                    <ul>
                        <li><a className="listItem" href="/">Home</a></li>
                        <li><a className="listItem" href="/intro">Intro</a></li>
                        <li><a className="listItem" href="/links">Links</a></li>
                        <li><a className="listItem" href="/blog">Blog</a></li>
                        <li><a className="listItem" href="/game">Game</a></li>
                    </ul>
                </nav>
                <div className="hamburgerBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="hamburgerMenu">
                    <li><a className="listItem" href="/">Home</a></li>
                    <li><a className="listItem" href="/intro">Intro</a></li>
                    <li><a className="listItem" href="/links">Links</a></li>
                    <li><a className="listItem" href="/blog">Blog</a></li>
                    <li><a className="listItem" href="/game">Game</a></li>
                </div>
            </div>
        </header>
    )
}


export default Header;