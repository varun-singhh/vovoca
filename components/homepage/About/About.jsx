import React from 'react'
import style from './About.module.css';

const About=()=>{
    return(
        <div className={style.about}>
            <div className={style.container}>
                <h2>Welcome to Vovoca</h2>
                <div className={style.features}>
                    <div className={style.feature__col__1}>
                        <div className={style.feature}>
                            <div className={style.feature__heading}>
                                <h1>Feature 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                        <hr className="divider"></hr>
                        <div className={style.feature}>
                        <div className={style.feature__heading}>
                                <h1>Feature 2</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.vovoca__img}>
                        <h2>image</h2>
                    </div>
                    <div className={style.feature__col__2}>
                    <div className={style.feature}>
                    <div className={style.feature__heading}>
                                <h1>Feature 3</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                        <hr className="divider"></hr>
                        <div className={style.feature}>
                        <div className={style.feature__heading}>
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