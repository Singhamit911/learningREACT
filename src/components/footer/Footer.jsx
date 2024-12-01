import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    @Singhamit911 on Github - This project is made for learning purpose and all copyright of the API belongs to TMDB- 2023
                </div>
                <div className="socialIcons">
                <a href="https://github.com/Singhamit911" target="_blank" className="iconWhite" >
                    <span className="icon">
                        <FaGithub />
                    </span></a>

                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <a href="https://www.linkedin.com/in/contact-singhamit/" target="_blank" className="iconWhite" >
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                </div>

            </ContentWrapper>
        </footer>
    );
};

export default Footer;
