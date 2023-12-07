import React from 'react'
import './Footer.css'
import { AiFillApple } from "react-icons/ai";
import { BiChevronRight, BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-con">

            <div className="footer-text">
                <p>Prices are inclusive of VAT. Free delivery for all orders.<br></br>
                *Total order value must be less than 30,000 THB. Admin fee may be charged by bank/processing entity in addition to order value.<br></br>
                **For approves customers only. Subject to approval. For more information, see <a href=' http://www.apple.com/th-en/help/payments.'>http://www.apple.com/th-en/help/payments.</a></p>
            </div>

            <div className="logo-welcome">
                <p><AiFillApple /><BiChevronRight /> Welcome to the Apple store</p>
            </div>

            <div className="menu-bar">
{/* row 1 */}   <div className="menu-bar-row">
                    <div className="menu-block">
                        <ul className="head">Shop and Learn
                            <li><a href='#'>Mac</a></li>
                            <li><a href='#'>iPad</a></li>
                            <li><a href='#'>iPhone</a></li>
                            <li><a href='#'>Watch</a></li>
                            <li><a href='#'>AirPods</a></li>
                            <li><a href='#'>TV & Home</a></li>
                            <li><a href='#'>Only on Apple</a></li>
                            <li><a href='#'>Accessories</a></li>
                            <li><a href='#'>Gift Cards</a></li>
                        </ul>
                    </div>
                </div> 

{/* row 2 */}   <div className="menu-bar-row">
                    <div className="menu-block">
                        <ul className="head">Services
                            <li><a href='#'>Apple Music</a></li>
                            <li><a href='#'>Apple TV+</a></li>
                            <li><a href='#'>Apple Arcade</a></li>
                            <li><a href='#'>iCloud+</a></li>
                            <li><a href='#'>Apple One</a></li>
                            <li><a href='#'>Apple Books</a></li>
                            <li><a href='#'>Apple Podcasts</a></li>
                            <li><a href='#'>App Store</a></li>
                        </ul>
                    </div>

                    <div className="menu-block">
                        <ul className="head">Account
                            <li><a href='#'>Manage Your Apple ID</a></li>
                            <li><a href='#'>Apple Store Account</a></li>
                            <li><a href='#'>iCloud.com </a></li>
                        </ul>
                    </div>
                </div>          
{/* row 3 */}   <div className="menu-bar-row">
                    <div className="menu-block">
                        <ul className="head">App Store
                            <li><a href='#'>Find a Store</a></li>
                            <li><a href='#'>Genius Bar</a></li>
                            <li><a href='#'>Today at Apple</a></li>
                            <li><a href='#'>Apple Store App</a></li>
                            <li><a href='#'>Financing</a></li>
                            <li><a href='#'>Trade in</a></li>
                            <li><a href='#'>Reuse and Recycling</a></li>
                            <li><a href='#'>Order Status</a></li>
                            <li><a href='#'>Shopping Help</a></li>
                        </ul>
                    </div>
                </div> 
{/* row 4 */}   <div className="menu-bar-row">
                    <div className="menu-block">
                        <ul className="head">For Business
                            <li><a href='#'>Apple and Business</a></li>
                            <li><a href='#'>Shop for Business</a></li>
                        </ul>
                    </div>
                
                    <div className="menu-block">
                        <ul className="head">For Education
                            <li><a href='#'>Apple and Education</a></li>
                            <li><a href='#'>Shop for College</a></li>
                        </ul>
                    </div>

                    <div className="menu-block">
                        <ul className="head">For Healthcare
                            <li><a href='#'>Apple in Healthcare</a></li>
                        </ul>
                    </div>
                </div> 
{/* row 5 */}   <div className="menu-bar-row">
                    <div className="menu-block">
                        <ul className="head">Apple Values
                            <li><a href='#'>Accessibility</a></li>
                            <li><a href='#'>Environment</a></li>
                            <li><a href='#'>Privacy</a></li>
                            <li><a href='#'>Supplier Responsibility</a></li>
                        </ul>
                    </div>
                    
                    <div className="menu-block">
                        <ul className="head">About Apple
                            <li><a href='#'>Newsroom</a></li>
                            <li><a href='#'>Apple Leadership</a></li>
                            <li><a href='#'>Job Opportunities</a></li>
                            <li><a href='#'>Investors</a></li>
                            <li><a href='#'>Ethics & Compliance</a></li>
                            <li><a href='#'>Events</a></li>
                            <li><a href='#'>Contact Apple</a></li>
                        </ul>
                    </div>
                </div>          
            </div>

            <div className="footer-text-2">
                <p>More ways to shop: <a href='#'>Find an Apple store</a>or<a href='#'>other retailer</a>near you. Or call 1800-01-9209.</p>
            </div>

            <div className="other-information">
                {/* block 1 */}
                <div className="basic-information">
                    <div className="copyright">
                        <p>Copyright <BiCopyright /> 2022 Apple lnc. All rights reserved.</p>
                    </div>

                    <div className="basic-list">
                        <ul>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms of Use</a></li>
                            <li><a href='#'>Sales and Refunds</a></li>
                            <li><a href='#'>Legal</a></li>
                            <li><a href='#'>Site Map</a></li>
                        </ul>
                    </div>
                </div>
                {/* block 2 */}
                <div className="language">
                    <ul>
                        <li><a href='#'>Thailand</a></li>
                        <li><a href='#'>Thai</a></li>
                    </ul>
                </div>  

            </div>
        </div>
    </div>
  )
}

export default Footer