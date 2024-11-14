import React from 'react';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => (
    <footer>
        <ul className="my-links">
            <a href="mailto:enzo.dosanjos@yahoo.com">
                <EmailOutlinedIcon className="icon-mail"/>
            </a>
            <a href="https://github.com/enzo-dosanjos">
                <GitHubIcon className="icon-git"/>
            </a>
            <a href="https://linkedin.com/in/enzo-dos-anjos-548484238">
                <LinkedInIcon className="icon-linkedin"/>
            </a>
        </ul>
        <p>© Enzo Dos Anjos</p>
    </footer>
)

export default Footer;