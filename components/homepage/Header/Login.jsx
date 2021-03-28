import React from 'react';
import style from './Login.module.css';

const Login = () => {
  return (
    <div>
      <form className={style.get__in__touch__form}>
        <div className={style.form__row}>
            <h1 style={{color:"wheat"}}>Login</h1>
          <div className={style.inputs}>
            <input
              className={style.feild__input}
              type="text"
              placeholder="Your name*"
              name="name"
            />
            <input
              className={style.feild__input}
              type="text"
              placeholder="Your email id*"
              name="email"
            />
          </div>
        </div>
        <div className={style.subscribe}>
          <button className={style.subscribe__btn}>Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
