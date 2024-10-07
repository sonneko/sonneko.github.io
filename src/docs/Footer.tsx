import "./css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="sitemap">
                <h1>Site Map</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/intro">Introduction</Link></li>
                    <li><Link to="/links">Links</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/game">Game</Link></li>
                </ul>
            </div>
            <div className="copyright">
                <span>copyright © 2024 sonneko</span>
            </div>
        </footer>
    )
}

export default Footer;