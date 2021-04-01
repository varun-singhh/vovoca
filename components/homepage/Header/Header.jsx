import React, { useState } from 'react';
import style from './Header.module.css';
import { FaTimes } from 'react-icons/fa';
import { Modal } from 'react-responsive-modal';
import Login from './Login';
import style_modal from '../../../styles/Modal.module.css';
import Signup from './Signup';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Router from 'next/router';
const Header = () => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
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
              borderBottom: `${
                method === 'login' ? '1px solid wheat' : 'gray'
              }`,
              paddingBottom: '5px',
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
              borderBottom: `${
                method === 'signup' ? '1px solid wheat' : 'gray'
              }`,
              paddingBottom: '5px',
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
                  <span style={{ color: 'wheat', cursor: 'pointer' }} onClick={()=>{Router.push('/privacy-policy');location.reload();}}>
                    Terms of Service and Privacy Policy
                  </span>
              </p>
            </>
          )}
        </div>
      </>
    );
  };
  return (
    <div>
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
        <AuthModal />
      </Modal>
      <div className={style.header__info}>
        <div className={style.mobile__view}>
          <h1 className={style.banner__heading}>
            #Tune your work with Royalty Free Music
          </h1>
          <p className={style.banner__sub__heading}>
            Welcome to vovoca, one stop solution for all you musical needs, we
            provide royalty free music so that your creativity never stops.
          </p>
          {authenticated === true ? (
            <></>
          ) : (
            <button
              style={{ marginTop: '25px' }}
              className={[style.btn, style.joinUs__btn].join(' ')}
              onClick={onOpenModal}
            >
              Join us Now
            </button>
          )}
        </div>
        <img src="./static/saly.svg" className={style.banner__image} />
      </div>

      <div className={style.header}>
        <svg className={style.image__svg} viewBox="0 0 1920 792" fill="none">
          <path
            opacity="0.05"
            d="M1245 671.5H0V792H1920V0.5H1450C1392.01 0.5 1345 47.5101 1345 105.5V571.5C1345 626.728 1300.23 671.5 1245 671.5Z"
            fill="white"
          ></path>
          <circle cx="509" cy="121" r="18" fill="#00FFFF"></circle>
          <circle cx="367.5" cy="138.5" r="9.5" fill="#FF6600"></circle>
          <circle cx="526.5" cy="431.5" r="6.5" fill="#FEC763"></circle>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-30.2098"
              y1="414"
              x2="1076.2"
              y2="412.898"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#323436"></stop>
              <stop offset="1" stopColor="#02B8A2"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className={style.vovoca__markdown}>
          <p className={style.vovoca__name}>VOVOCA</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
