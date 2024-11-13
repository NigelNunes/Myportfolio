import React from 'react';

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} Nigel Nunes. All rights reserved.</p>
    <p>Contact me: nigelnunes2004@gmail.com</p>
    <div class="resume-section">
            <h3>Download My Resume</h3>
            <a href="Nigel Resume.pdf" class="resume-button" target="_blank" download="Nigel Resume.pdf">Download Resume</a>
            
        </div>
  </footer>
);

export default Footer;
