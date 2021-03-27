import React from 'react'
import '../../Static/css/About.css';

const About=()=>{
    return(
        <div className="about">
            <div className="container">
                <h2>Welcome to Vovoca</h2>
                <div className="features">
                    <div className="feature-col-1">
                        <div className="feature">
                            <div className="feature-heading">
                                <h1>Feature 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="feature">
                        <div className="feature-heading">
                                <h1>Feature 2</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="vovoca-img">
                        <h2>image</h2>
                    </div>
                    <div className="feature-col-2">
                    <div className="feature">
                    <div className="feature-heading">
                                <h1>Feature 3</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="feature">
                        <div className="feature-heading">
                                <h1>Feature 4</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About