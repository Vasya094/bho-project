import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer id="foo">
            <p className="text-center mt-1">
                BHO - 2019-2021, All Rights Reserved
            </p>
            <div className="social-container">
                <a
                    href="https://www.facebook.com/hanabnihobraana.hanabnihobraana"
                    className="facebook social"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/Barana_hanabnei"
                target="_blank" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                    href="https://www.instagram.com/barana_hanabneiho/"
                    target="_blank"
                    className="instagram social"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                    href="https://wa.me/+249991111497"
                    target="_blank"
                    className="whatsapp social"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
