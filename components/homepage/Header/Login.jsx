import React, { useState } from 'react';
import style from './Login.module.css';
import { useSelector } from 'react-redux';
import { loginUser } from '../../../actions/authAction';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Router from 'next/router'

const Login = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const authenticate = useSelector((state) => state.auth.isAuthenticated);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    login[e.target.name] = e.target.value;
    setLogin(login);
  };
  const notify = (category) => {
    if (category === 'success') {

      toast('Loggedin Successfully', {
        closeButton: false,
        className: style.toast_success_background,
      });
      Router.push("/dashboard")


    } else {
      console.log(error);
      toast(error.err || 'Something went wrong', {
        closeButton: false,
        className: style.toast_background,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login.email === '' || login.password === '') {
      toast.error('All feilds are Mandatory', {
        closeButton: false,
      });
    } else {
      dispatch(loginUser(login.email, login.password)).then((res) => {
        if (res === true) {
        
          props.onCloseModal();
          notify('success');
        } else {
          notify('error');
        }
      });

     
    }
  };
  return (
    <div>
      <form className={style.get__in__touch__form}>
        <div className={style.form__row}>
          <h1 style={{ color: 'wheat' }}>Login</h1>
          <div className={style.inputs}>
            <input
              className={style.feild__input}
              type="email"
              placeholder="email*"
              name="email"
              required
              onChange={handleChange}
            />
            <input
              className={style.feild__input}
              type="password"
              placeholder="password*"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.subscribe}>
          <button className={style.subscribe__btn} onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
