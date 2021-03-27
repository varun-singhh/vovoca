import React from 'react'
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.contents}>
                    <div className={style.get__in__touch}>
                        <h2>Get in Touch</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum 
                        dolor sit amet, consectetur adipiscing.</p>
                        <form className={style.get__in__touch__form}>
                            <div className={style.form__row}>
                                <div className={style.inputs}>
                                <input className={style.feild__input} type="text" placeholder="Your name*" name="name"/>
                                <input className={style.feild__input} type="text" placeholder="Your email id*" name="email"/>
                                </div>
                                <div className={style.message}>
                                    <textarea className={style.mssg__input} type="text" placeholder="Your question" name="email"/>

                                </div>
                            </div>
                            <div className={style.subscribe}>
                                <button className={style.subscribe__btn}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className={style.contacts}>
                        <div className={style.contact__box}>
                            <div className={style.row}>
                                <div className={[style.get__the__app, style.phone__display].join(' ')}>
                                    <h4>Get the app:</h4>
                                    <div className={style.download__app__buttons}>
                                        <button className={style.apple__btn}>Apple Store</button>
                                        <button className={style.playstore__btn}>Google Play</button>
                                    </div>
                                    
                                </div>
                                <div className={style.contact__details}>
                                    <h4>Contacts:</h4>
                                    <table className={style.contact__info}>
                                        <tbody>
                                            <tr>
                                                <td className={style.contact__type}>
                                                    Ph.
                                                </td>
                                                <td className={style.contact__value}>
                                                    1-800-901-234
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={style.contact__type}>
                                                    Mail.
                                                </td>
                                                <td className={style.contact__value}>
                                                    test@test.com
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={style.contact__type}>
                                                    Office.
                                                </td>
                                                <td className={style.contact__value}>
                                                    DevBucket headoffic,
                                                    Choonawala gali. Amsterdam
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                                
                            </div>
                            <hr className={style.divider}></hr>
                            <div className={style.rights}>
                                <p>© DevBucket 2021. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
