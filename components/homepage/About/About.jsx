import React from 'react'
import style from './About.module.css';

const About=()=>{
    return(
        <div id="about" className={style.about}>
            <div className={style.container}>
                <h2>Welcome to Vovoca</h2>
                <div className={style.features}>
                    <div className={style.feature__col__1}>
                        <div className={style.feature}>
                            <div style={{textAlign: 'left'}} className={style.feature__heading}>
                                <h2>Royalty Free</h2>
                                <p style={{textAlign: 'left'}}>Enjoy Royalty Free awesome music for free<br/>
                                We provide all of our services free<br/>
                                Login and use vovoca for free forever</p>
                            </div>
                        </div>
                        <hr className="divider"></hr>
                        <div className={style.feature}>
                        <div style={{textAlign: 'left'}} className={style.feature__heading}>
                                <h2>No Credits Required</h2>
                                <p style={{textAlign: 'left'}}>You dont even have to pay us or give us credit<br/>
                                for using our music anywhere, in your songs,<br/>
                                vidoes or office presentation</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.vovoca__img}>
                        <img src="https://source.unsplash.com/daily?neon/1200x1200" />
                    </div>
                    <div className={style.feature__col__2}>
                    <div className={style.feature}>
                    <div style={{textAlign: 'right'}} className={style.feature__heading}>
                                <h2>Filter Music</h2>
                                <p style={{textAlign: 'right'}}>Login to utilise complete set of features<br/>
                                of vovoca. You can then easily filter<br/>
                                our music category wise</p>
                            </div>
                        </div>
                        <hr className="divider"></hr>
                        <div className={style.feature}>
                        <div style={{textAlign: 'right'}} className={style.feature__heading}>
                                <h2>Upload Music</h2>
                                <p style={{textAlign: 'right'}}>You can also share your work and talent to whole<br/>
                                world for free. Sign in and upload your<br/>
                                created music with the world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About