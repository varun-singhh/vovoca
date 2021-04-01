import React, { useState } from 'react';
import style from './Login.module.css';
import { useSelector } from 'react-redux';
import { loginUser } from '../../../actions/authAction';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  console.log(props)
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
  const notify=(category)=>{
    if (category==="success") {
      toast('Loggedin Successfully', {
        className: style.toast_success_background,
      });
    } else {
      toast(error.err, {
        className: style.toast_background,
      });
    }
  }
  console.log(props.closeModal)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props)
    if (login.email===""|| login.password==="") {
      toast("All feilds are Mandatory",{className: style.toast_background})
    }
    else{
      dispatch(loginUser(login.email, login.password));
      if (authenticate===true) {
        notify("success");
      } else {
        notify("error");
      }
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
