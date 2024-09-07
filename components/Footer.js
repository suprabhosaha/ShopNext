import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer-container">
            <p>
                2024 ShopNext All Rights Reserved
            </p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    );
}

export default Footer;