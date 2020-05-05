import React from 'react';
import './footer.css';

function Header(){
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-row-1">
                    <h2>UI/UX</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum laudantium maxime delectus officia incidunt perferendis sit eius esse voluptas, corrupti culpa debitis ullam sequi, blanditiis mollitia enim dolores et accusamus. Nemo, saepe aliquid ipsum praesentium harum fugit eos tenetur doloribus!
                    </p>
                </div>
                <div className="footer-row-2">
                    <ul>
                        <h3>Quick Links</h3>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#product">Products</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div className="footer-row-3">
                    <ul>
                        <h3>Tutorials</h3>
                        <li><a href="#help/faq">HTML/CSS</a></li>
                        <li><a href="#press">JavaScript</a></li>
                        <li><a href="#affiliates">PHP</a></li>
                        <li><a href="#partners">C</a></li>
                        <li><a href="#partners">Java</a></li>
                    </ul>
                </div>
                <div className="footer-row-4">
                    <ul>
                        <h3>Contact Us</h3>
                        <li>
                            <a href="#address">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                1, XYZ Street, Bengaluru, India
                            </a>
                        </li>
                        <li>
                            <a href="#phone">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                                +91 1234567890
                            </a>
                        </li>
                        <li>
                            <a href="#mail">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                dummymail@somemail.com
                            </a>
                        </li>
                    </ul>
                    <div className="footer-social-media">
                        <ul>
                            <li><a href="#facebook"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                            <li><a href="#instagram"><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                            <li><a href="#twitter"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a></li>
                            <li><a href="#twitter"><i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>            
            <div className="footer-line-separate"></div>
            <div className="footer-bottom">
                <div className="copyrights">
                    Copyright &copy; 2020 UI/UX Inc. All rights reserved.
                </div>
                <div className="privacy">
                    <ul>
                        <li><a href="#privacypolicy">Privacy Policy</a></li>
                        <li><a href="#termsofuse">Terms of Use</a></li>
                        <li><a href="#legal">Legal</a></li>
                        <li><a href="#sitemap">Site Map</a></li>
                    </ul>
                </div>
                <div className="country">India.</div>
            </div>
        </div>
    );
}
export default Header;