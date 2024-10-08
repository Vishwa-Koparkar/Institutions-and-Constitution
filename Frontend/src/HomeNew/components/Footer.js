import React from "react";
import './Footer.css'; // Make sure to add this for custom styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section AboutUs">
                    <h3>About Us</h3>
                    <p>We simplify the Indian Constitution, focusing on Parts V and VI, to make it easier for everyone to understand. Our mission is to make legal concepts accessible through interactive tools like mind maps and quizzes.</p>
                    <a href="#">Learn More About Us &rarr;</a>
                </div>
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Mind Maps</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section resources">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Constitution of India (PDF)</a></li>
                        <li><a href="#">Educational Videos</a></li>
                        <li><a href="#">Useful References</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </div>
                <div className="footer-section enquiry">
                    <h3>Enquiry</h3>
                    <p>E-mail:</p>
                    <p>Phone:</p>
                    <p>Address:</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Constitution Learners | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
            </div>
        </footer>
    );
};

export default Footer;