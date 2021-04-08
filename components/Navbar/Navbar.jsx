import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { Modal } from 'react-responsive-modal';
import { FaTimes, FaUserCircle, FaCode } from 'react-icons/fa';
import Login from '../homepage/Header/Login';
import style_modal from '../../styles/Modal.module.css';
import cookie from 'js-cookie';
import Link from 'next/link';
import Signup from '../homepage/Header/Signup';
import { useSelector, useDispatch } from 'react-redux';
import { FaPowerOff } from 'react-icons/fa';
import { IoMdLogIn, IoMdTrendingUp } from 'react-icons/io';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import {
  BsFillShieldLockFill,
  BsFillPeopleFill,
  BsFillMusicPlayerFill,
} from 'react-icons/bs';
import { getUserDetails } from '../../actions/authAction';
// RiDashboard2Line
// BsFillShieldLockFill
// AiFillHome

const Navbar = () => {
  const logout = () => {
    cookie.remove('token');
    if (process.browser) {
      window.location.href = '/';
    }
  };
  const [nav, setNav] = useState('home');
  const dispatch = useDispatch();
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
    if (cookie.get('token')) {
      dispatch(getUserDetails());
    }
  }, []);
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

        {method === 'login' ? (
          <Login onCloseModal={onCloseModal} />
        ) : (
          <Signup onCloseModal={onCloseModal} />
        )}
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
                <a href="/privacy-policy">
                  <span style={{ color: 'wheat', cursor: 'pointer' }}>
                    Terms of Service and Privacy Policy
                  </span>
                </a>
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
        <Link scroll={true} href="/">
          <div className={style.neon}>VOVOCA</div>
        </Link>
        <div className={style.nav__bar}>
          <ul className={style.nav__items}>
            <Link scroll={true} href="/">
              <li className={style.list__items}>Home</li>
            </Link>
            <Link scroll={true} href="/#about">
              <li className={style.list__items}>About us</li>
            </Link>
            <Link scroll={true} href="/testimonial">
              <li className={style.list__items}>Testimonials</li>
            </Link>
            <Link scroll={true} href="/developers">
              <li className={style.list__items}>Developers</li>
            </Link>
            {authenticated.isAuthenticated === true ? (
              <Link scroll={true} href="/dashboard">
                {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaUserCircle
                    style={{
                      fontSize: '3.1em',
                      marginLeft: '1.5rem',
                      color: 'wheat',
                      cursor: 'pointer',
                      marginBottom: '-1rem',
                    }}
                  />
                </div> */}
                <button
                  style={{ marginLeft: '25px', padding: '0.4em 1em' }}
                  id="dashboard"
                >
                  <p
                    htmlFor="dashboard"
                    style={{
                      color: 'wheat',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FaUserCircle style={{ marginRight: '10px' }} />
                    Dashboard
                  </p>
                </button>
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
            <Link scroll={true} href="/">
              <div className={style.neon}>VOVOCA</div>
            </Link>
          </div>
          <div className={style.dashnav_mobile}>
            <Link scroll={true} href="/allMusic">
              <p
                className={style.navtext}
                onClick={(r) => setNav('category')}
                style={{ color: `${nav === 'category' ? 'wheat' : 'gray'}` }}
              >
                <BsFillMusicPlayerFill />
                <span className={style.text_mobile}>All Music</span>
              </p>
            </Link>
            <Link scroll={true} href="/">
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
            <Link scroll={true} href="/dashboard">
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
              onClick={() => logout()}
            >
              <FaPowerOff />
              <span className={style.text_mobile}>Logout</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={style.mobile__header}>
            <Link scroll={true} href="/">
              <div className={style.neon}>VOVOCA</div>
            </Link>
          </div>
          <div className={style.dashnav_mobile}>
            <Link scroll={true} href="/testimonial">
              <p
                className={style.navtext}
                onClick={(r) => setNav('testimonial')}
                style={{ color: `${nav === 'testimonial' ? 'wheat' : 'gray'}` }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <BsFillPeopleFill />
                <span className={style.text_mobile}>Testimonial</span>
              </p>
            </Link>
            <Link scroll={true} href="/developers">
              <p
                className={style.navtext}
                onClick={(r) => setNav('history')}
                style={{ color: `${nav === 'history' ? 'wheat' : 'gray'}` }}
              >
                {' '}
                &nbsp;
                <FaCode />
                <span className={style.text_mobile}>Developers</span>
              </p>
            </Link>
            <Link scroll={true} href="/">
              <p
                className={style.navtext}
                onClick={(r) => setNav('home')}
                style={{ color: `${nav === 'home' ? 'wheat' : 'gray'}` }}
              >
                {' '}
                <AiFillHome />
                <span className={style.text_mobile}>Home</span>
              </p>
            </Link>
            <Link scroll={true} href="/#about">
              <p
                className={style.navtext}
                onClick={(r) => setNav('about')}
                style={{ color: `${nav === 'about' ? 'wheat' : 'gray'}` }}
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
              {' '}
              &nbsp;
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
