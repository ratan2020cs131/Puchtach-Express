import React from 'react';
import './css/footer.css';
import github from './images/github.png';

const Footer = () => {
    return (
        <footer id="footer">
            <div id="orgName">
                <div id="copyright">Copyrights reserved to</div>
                <div>Puchtach <b>Express</b></div>
            </div>
            <div id="contact">
                <div id="socialLinks">
                    <a href="https://github.com/ratan2020cs131"
                        target="_blank"
                        rel="noopener">
                        <img src={github} alt="github" />
                <p>Ratan Deep Singh</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;