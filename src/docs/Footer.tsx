import "./css/Footer.css";
import Space from '../components/mini/Space'
import SocialLinks from "../components/SocialLinks";

function Footer() {
    return (
        <>
            <Space size={2}/>
            <SocialLinks version="menu" />
        </>
    )
}

export default Footer;