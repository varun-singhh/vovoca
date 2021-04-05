import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { Modal } from 'react-responsive-modal';
import { FaTimes, FaUserCircle } from 'react-icons/fa';
import Login from '../homepage/Header/Login';
import style_modal from '../../styles/Modal.module.css';
import Link from 'next/link';
import Signup from '../homepage/Header/Signup';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaUserAlt,
  FaPowerOff,
  FaCrown,
  FaHistory,
  FaLayerGroup,
} from 'react-icons/fa';
import { IoMdLogIn,IoMdTrendingUp } from 'react-icons/io';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { BsFillShieldLockFill, BsFillPeopleFill,BsFillMusicPlayerFill } from 'react-icons/bs';
import { getUserDetails } from '../../actions/authAction';
// RiDashboard2Line
// BsFillShieldLockFill
// AiFillHome

const Navbar = () => {
  const [nav, setNav] = useState('profile');
  const dispatch = useDispatch()
  const authenticated = useSelector((state) => state.auth);
  const [scrollState, setScrollState] = useState('top');
  useEffect(() => {
    const listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;

      if (scrolled >= 1) {
        if (scrollState !== 'down') {
          setScrollState('down');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });

   

    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  useEffect(() => {
    if(localStorage.getItem("token")){
      console.log("hello")
      dispatch(getUserDetails())
      
    }
    
  }, [])
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const closeIcon = <svg style={{ display: 'none' }}></svg>;
  const [method, setMethod] = useState('login');
  const AuthModal = () => {
    return (
      <>
        <i style={{ color: 'gray', cursor: 'pointer' }} onClick={onCloseModal}>
          <FaTimes />
        </i>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p
            style={{
              cursor: 'pointer',
              color: `${method === 'login' ? 'wheat' : 'gray'}`,
            }}
            onClick={(res) => {
              setMethod('login');
            }}
          >
            Login
          </p>
          <p
            style={{
              cursor: 'pointer',
              color: `${method === 'signup' ? 'wheat' : 'gray'}`,
            }}
            onClick={(res) => {
              setMethod('signup');
            }}
          >
            Signup
          </p>
        </div>
        <hr className="divider"></hr>

        {method === 'login' ? <Login onCloseModal={onCloseModal} /> : <Signup onCloseModal={onCloseModal}/>}
        <br />
        <hr className="divider"></hr>
        {/* By submitting this form, you confirm that you agree to our Terms of Service and Privacy Policy. */}
        <div style={{ textAlign: 'center' }}>
          {method === 'login' ? (
            <p style={{ color: 'gray', fontSize: 'x-small' }}>
              Don’t have an account?{' '}
              <span
                style={{ color: 'wheat', cursor: 'pointer' }}
                onClick={(res) => {
                  setMethod('signup');
                }}
              >
                Signup Here
              </span>
            </p>
          ) : (
            <>
              <p style={{ color: 'gray', fontSize: 'x-small' }}>
                Already have an account?{' '}
                <span
                  style={{ color: 'wheat', cursor: 'pointer' }}
                  onClick={(res) => {
                    setMethod('login');
                  }}
                >
                  Login Here
                </span>
              </p>

              <p style={{ color: 'gray', fontSize: 'x-small' }}>
                By submitting this form, you confirm that you agree to our{' '}
                <Link href="privacy-policy">
                
                  <span style={{ color: 'wheat', cursor: 'pointer' }}>
                    Terms of Service and Privacy Policy
                  </span>
                </Link>
              </p>
            </>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: style_modal.customOverlay,
          modal: style_modal.customModal,
        }}
        closeIcon={closeIcon}
      >
        <AuthModal />{' '}
      </Modal>
      <div
        className={
          scrollState !== 'top'
            ? [style.navbar__box, style.scroll__header].join(' ')
            : style.navbar__box
        }
      >
        <Link href="/">
          <div className={style.neon}>VOVOCA</div>
        </Link>
        <div className={style.nav__bar}>
          <ul className={style.nav__items}>
            <Link href="/">
              <li className={style.list__items}>Home</li>
            </Link>
            <Link href="/#about">
              <li className={style.list__items}>About us</li>
            </Link>
            <Link href="/allMusic">
              <li className={style.list__items}>Listen Now</li>
            </Link>
            <Link href="/testimonial">
              <li className={style.list__items}>Testimonials</li>
            </Link>
            <Link href="/privacy-policy">
              <li className={style.list__items}>Privacy Policy</li>
            </Link>
            {authenticated.isAuthenticated === true ? (
              <Link href="/dashboard">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaUserCircle
                    style={{
                      fontSize: '3.1em',
                      marginLeft: '1.5rem',
                      color: 'wheat',
                      cursor: 'pointer',
                      marginBottom: '-1rem',
                    }}
                  />
                </div>
              </Link>
            ) : (
              <button
                style={{
                  marginLeft: '15px',
                  paddingTop: '0.5em',
                  paddingBottom: '0.5em',
                  fontSize: '1.1em',
                }}
                className={style.butn}
                onClick={onOpenModal}
              >
                Login
              </button>
            )}
          </ul>
        </div>
      </div>
      {authenticated.isAuthenticated === true ? (
        <>
          <div className={style.mobile__header}>
            <Link href="/">
              <div className={style.neon}>VOVOCA</div>
            </Link>
          </div>
          <div className={style.dashnav_mobile}>
            <Link href="/#features">
              <p
                className={style.navtext}
                onClick={(r) => setNav('profile')}
                style={{ color: `${nav === 'profile' ? 'wheat' : 'gray'}` }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <IoMdTrendingUp />
                <span className={style.text_mobile}>Testimonial</span>
              </p>
            </Link>
            <Link href="/allMusic">
              <p
                className={style.navtext}
                onClick={(r) => setNav('category')}
                style={{ color: `${nav === 'category' ? 'wheat' : 'gray'}` }}
              >
                <BsFillMusicPlayerFill />
                <span className={style.text_mobile}>All Music</span>
              </p>
            </Link>
            <Link href="/">
              <p
                className={style.navtext}
                onClick={(r) => setNav('trending')}
                style={{ color: `${nav === 'trending' ? 'wheat' : 'gray'}` }}
              >
                {' '}
                <AiFillHome />
                <span className={style.text_mobile}>Home</span>
              </p>
            </Link>
            <Link href="/dashboard">
              <p
                className={style.navtext}
                onClick={(r) => setNav('history')}
                style={{ color: `${nav === 'history' ? 'wheat' : 'gray'}` }}
              >
                {' '}
                &nbsp;
                <FaUserCircle />
                <span className={style.text_mobile}>Dashboard</span>
              </p>
            </Link>
            <p
              className={style.navtext}
              onClick={(r) => setNav('logout')}
              style={{
                color: `${nav === 'logout' ? 'rgb(218, 84, 84)' : 'gray'}`,
              }}
              onClick={onOpenModal}
            >
              <FaPowerOff />
              <span className={style.text_mobile}>Logout</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={style.mobile__header}>
            <Link href="/">
              <div className={style.neon}>VOVOCA</div>
            </Link>
          </div>
          <div className={style.dashnav_mobile}>
            <Link href="/testimonial">
              <p
                className={style.navtext}
                onClick={(r) => setNav('profile')}
                style={{ color: `${nav === 'profile' ? 'wheat' : 'gray'}` }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BsFillPeopleFill />
                <span className={style.text_mobile}>Testimonial</span>
              </p>
            </Link>
            <Link href="/privacy-policy">
              <p
                className={style.navtext}
                onClick={(r) => setNav('category')}
                style={{ color: `${nav === 'category' ? 'wheat' : 'gray'}` }}
              >
                <BsFillShieldLockFill />
                <span className={style.text_mobile}>Privacy Policy</span>
              </p>
            </Link>
            <Link href="/">
              <p
                className={style.navtext}
                onClick={(r) => setNav('trending')}
                style={{ color: `${nav === 'trending' ? 'wheat' : 'gray'}` }}
              >
                {' '}
                <AiFillHome />
                <span className={style.text_mobile}>Home</span>
              </p>
            </Link>
            <Link href="/#about">
              <p
                className={style.navtext}
                onClick={(r) => setNav('history')}
                style={{ color: `${nav === 'history' ? 'wheat' : 'gray'}` }}
              >
                {' '}
                &nbsp;
                <AiFillInfoCircle />
                <span className={style.text_mobile}>About</span>
              </p>
            </Link>
            <p
              className={style.navtext}
              onClick={(r) => setNav('logout')}
              style={{
                color: `${nav === 'logout' ? 'rgb(218, 84, 84)' : 'gray'}`,
              }}
              onClick={onOpenModal}
            >
              <IoMdLogIn />
              <span className={style.text_mobile}>Login</span>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
