import React, { useState } from 'react'
import style from './Login.module.css';
import {registerUser}  from "../../../actions/authAction"
import { toast } from 'react-toastify';

const Signup = (props) => {
  const [register,setRegister]=useState({
    username:"",
    email:"",
    password:"",
    pass:""
  })
  const handleChange=(e)=>{
    register[e.target.name]=e.target.value
    setRegister(register)
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if (register.email===""|| register.username==="") {
      toast.error("All feilds are Mandatory")
    }
    else if(register.password.length<8 || register.password.length>16){
      toast.error("Password length should be between 8-16 characters")
    }
    else if(register.password.length<8 || register.password.length>16){
      toast.error("Password length should be between 8-16 characters")
    }
    else{
      const reg = await registerUser(register.username,register.email,register.password)
      if(reg==="Username already exists" || reg==="Email already registered"){
        toast.error(reg)
      }

      else{
        props.onCloseModal()
        toast.success("Account Created Successfully, Login to Enter")
      }
      
    }
  }
    return (
        <div>
      <form className={style.get__in__touch__form} >
        <div className={style.form__row}>
            <h1 style={{color:"wheat"}}>Create Account</h1>
          <div className={style.inputs}>
            <input
              className={style.feild__input}
              type="text"
              placeholder="username*"
              name="username"
              required
              onChange={handleChange}
            />
            <input
              className={style.feild__input}
              type="email"
              placeholder="your email id*"
              name="email"
              required
              onChange={handleChange}
            />
            <input
              className={style.feild__input}
              type="password"
              placeholder="Your password*"
              name="password"
              required
              onChange={handleChange}
            />
            <input
              className={style.feild__input}
              type="password"
              placeholder="confirm password*"
              name="pass"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.subscribe}>
          <button className={style.subscribe__btn} onClick={handleSubmit}>Create Account</button>
        </div>
      </form>
    </div>
    )
}

export default Signup
