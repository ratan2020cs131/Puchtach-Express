import React from 'react';
import './css/footer.css';
import github from './images/github.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';

const Footer = () => {
    return (
        <footer id="footer">
            <div id="orgName">
                <div id="copyright">Copyrights reserved to</div>
                <div>Typing <b>Test</b></div>
            </div>
            <div id="contact">
                <div id="socialLinks">
                    <a href="https://www.instagram.com/ratan.deep.23"
                        target="_blank"
                        rel="noopener">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/ratan-deep-singh-50322b211/"
                        target="_blank"
                        rel="noopener">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://github.com/ratan2020cs131"
                        target="_blank"
                        rel="noopener">
                        <img src={github} alt="github" />
                    </a>
                </div>
                <p>Ratan Deep Singh</p>
            </div>
        </footer>
    )
}

export default Footer;