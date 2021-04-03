import React from 'react'
import Head from 'next/head'
import style from '../styles/PrivacyPolicy.module.css'

const privacyPolicy = () => {

    const maximiseInfo = (num) => {
        if (process.browser) {
            const paraNum = document.getElementById(num)
            const paraNum1 = document.getElementById(1)
            const paraNum2 = document.getElementById(2)
            const paraNum3 = document.getElementById(3)
            paraNum1.classList.add("PrivacyPolicy_none__2C-dW")
            paraNum2.classList.add("PrivacyPolicy_none__2C-dW")
            paraNum3.classList.add("PrivacyPolicy_none__2C-dW")
            paraNum.classList.remove("PrivacyPolicy_none__2C-dW")
        }
    }

    return (
        <div className={style.container}>
            <Head>
                <title>VOVOCA | Privacy Policy</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            </Head>
            <div className={style.app}>
                <h2>Privacy Policy</h2>
                <div className={style.modal__button}>
                    <div className={style.modal__button__info}>
                        <h4>General Information</h4>
                        <div onClick={() => {maximiseInfo('1')}} className={style.toggle__button}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <p id="1b" id="1" className={style.modal__button__para}>
                        Vovoca is a project under team DevBucket. We have putted our heart and soul in it to bring it to you for free. We our free today because of several open-source technologies out there that we have used all togethor to bring you Vovoca. We therefore aim to bring you vovoca as a open-source program too after completion of all the basic structure and interface. Our backend APIs are currently hosted on heroku and frontend on vercel while in development mode.
                    </p>
                </div>
                <div className={style.modal__button}>
                    <div className={style.modal__button__info}>
                        <h4>User Data Security</h4>
                        <div id="2b" onClick={() => {maximiseInfo('2')}} className={style.toggle__button}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <p id="2" className={[style.modal__button__para, style.none].join(' ')}>
                        We are more than aware of your private data. We have taken care of end to end encryption as much as we could have. All your passwords are hashed before going into our database. We however suggest you to not to use your common password on this website. You can use auto password gernerator on any browser for the same. Team DevBucket does not hold any guarantee on any possible leakage of private data or your music. We However assure you that we have followed all the best practices to secure your data
                    </p>
                </div>
                <div className={style.modal__button}>
                    <div className={style.modal__button__info}>
                        <h4>Database Policy</h4>
                        <div id="3b" onClick={() => {maximiseInfo('3')}} className={style.toggle__button}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <p id="3" className={[style.modal__button__para, style.none].join(' ')}>
                        We have used most secured and open sourced programs to host our web app currently. We are using heroku and node and postgreSQL for our database. Therefore any data breach over heroku may lead to  data leakage on our website. In any such case, Vovoca or DevBucket does not holds any guarantee. We are currently working day and night and implementing methods to make vovoca a more secure app for your music and email and password. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default privacyPolicy