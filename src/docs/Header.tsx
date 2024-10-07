import "./css/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="title">
                <h1>Sonnekoのサイト</h1>
                <nav className="navigation">
                    <ul>
                        <li><Link className="listItem" to="/">Home</Link></li>
                        <li><Link className="listItem" to="/intro">Intro</Link></li>
                        <li><Link className="listItem" to="/links">Links</Link></li>
                        <li><Link className="listItem" to="/blog">Blog</Link></li>
                        <li><Link className="listItem" to="/game">Game</Link></li>
                    </ul>
                </nav>
                <div className="hamburgerBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="hamburgerMenu">
                    <li><Link className="listItem" to="/">Home</Link></li>
                    <li><Link className="listItem" to="/intro">Intro</Link></li>
                    <li><Link className="listItem" to="/links">Links</Link></li>
                    <li><Link className="listItem" to="/blog">Blog</Link></li>
                    <li><Link className="listItem" to="/game">Game</Link></li>
                </div>
            </div>
        </header>
    )
}


export default Header;