import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { Modal } from 'react-responsive-modal';
import { FaTimes, FaUserCircle } from 'react-icons/fa';
import Login from '../homepage/Header/Login';
import style_modal from '../../styles/Modal.module.css';
import Link from 'next/link';
import Signup from '../homepage/Header/Signup';
import { useSelector } from 'react-redux';

const Navbar = () => {
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

        {method === 'login' ? <Login /> : <Signup />}
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
            <Link href="/#features">
              <li className={style.list__items}>Trending</li>
            </Link>
            <Link href="/testimonial">
              <li className={style.list__items}>Testimonials</li>
            </Link>
            <Link href="/privacy-policy">
              <li className={style.list__items}>Privacy Policy</li>
            </Link>
            {authenticated.isAuthenticated === true ? (
              <Link href="/dashboard">
                <div style={{display:"flex",alignItems:"center"}}>
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
      <div className={style.navigation}>
        <div className={style.mobile__header}>
          <Link href="/">
            <div className={style.neon}>VOVOCA</div>
          </Link>
          <button className={[style.btn, style.getStarted__btn].join(' ')}>
            Get Started
          </button>
        </div>
        <input
          type="checkbox"
          id="navi-toggle"
          className={style.navigation__checkbox}
        />

        <label htmlFor="navi-toggle" className={style.navigation__button}>
          <span className={style.navigation__icon}>
            <span
              className={
                scrollState !== 'down' ? style.navigation__icon__span : ''
              }
            ></span>
            <span
              className={
                scrollState !== 'down' ? style.navigation__icon__span : ''
              }
            ></span>
            <span
              className={
                scrollState !== 'down' ? style.navigation__icon__span : ''
              }
            ></span>
            <span
              className={
                scrollState !== 'down' ? style.navigation__icon__span : ''
              }
            ></span>
            <span
              className={
                scrollState !== 'down' ? style.navigation__icon__span : ''
              }
            ></span>
            <span
              className={
                scrollState !== 'down' ? style.navigation__icon__span : ''
              }
            ></span>
          </span>
        </label>

        <div className={style.navigation__background}>&nbsp;</div>

        <nav className={style.navigation__nav}>
          <ul className={style.navigation__list}>
            <li className={style.navigation__item}>
              <Link href="/#about" passHref>
                <a href="/#about" className={style.navigation__link}>
                  Home
                </a>
              </Link>
            </li>
            <li className={style.navigation__item}>
              <a href="/#about" className={style.navigation__link}>
                Features
              </a>
            </li>
            <li className={style.navigation__item}>
              <a href="#" className={style.navigation__link}>
                Trending
              </a>
            </li>
            <li className={style.navigation__item}>
              <a href="#" className={style.navigation__link}>
                About
              </a>
            </li>
            <li className={style.navigation__item}>
              <a href="#" className={style.navigation__link}>
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
