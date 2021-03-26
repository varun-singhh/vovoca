import React from 'react'
import '../../Static/css/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="contents">
                    <div className="get-in-touch">
                        <h2>Get in Touch</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum 
                        dolor sit amet, consectetur adipiscing.</p>
                        <form className="get-in-touch-form">
                            <div className="form-row">
                                <div className="inputs">
                                <input className="name-input" type="text" placeholder="Your name*" name="name"/>
                                <input className="email-input" type="text" placeholder="Your email id*" name="email"/>
                                </div>
                                <div className="message">
                                <textarea className="message-text" type="text" placeholder="Your question" name="email"/>

                                </div>
                            </div>
                            <div className="subscribe">
                                <button className="subscribe-btn">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="contacts">
                        <div className="contact-box">
                            <div className="row">
                                <div className="get-the-app">
                                    <h4>Get the app</h4>
                                    <div className="download-app-buttons">
                                        <button className="apple-btn">Apple Store</button>
                                        <button className="playstore-btn">Google Play</button>
                                    </div>
                                    
                                </div>
                                <div className="contact-details">
                                    <h4>Contacts</h4>
                                    <table className="contact-info">
                                        <tbody>
                                            <tr>
                                                <td className="contact-type">
                                                    Ph.
                                                </td>
                                                <td className="contact-value">
                                                    1-800-901-234
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="contact-type">
                                                    Mail.
                                                </td>
                                                <td className="contact-value">
                                                    test@test.com
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="contact-type">
                                                    Office.
                                                </td>
                                                <td className="contact-value">
                                                    DevBucket headoffic,
                                                    Choonawala gali. Amsterdam
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                                
                            </div>
                            <hr></hr>
                            <div className="rights">
                                <p>2021 DevBucket. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
