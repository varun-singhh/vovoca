import React, { useState } from 'react';
import style from './Login.module.css';
import { useSelector } from 'react-redux';
import { loginUser } from '../../../actions/authAction';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    login[e.target.name] = e.target.value;
    setLogin(login);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(login.email, login.password));
    console.log(authenticated.error);
      if (authenticated.isAuthenticated !== false) {
        toast('Loggedin Successfully', {
          className: style.toast_success_background,
        });
      } else {
        toast(authenticated.error, { className: style.toast_background });
      }
  };
  return (
    <div>
      <ToastContainer
        hideProgressBar={true}
        closeButton={false}
        position="top-center"
      />
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
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });
export default Login;
