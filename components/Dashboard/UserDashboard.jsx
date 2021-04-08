import React, { useState } from 'react';
import style from './Dashboard.module.css';
import {
  FaUserAlt,
  FaPowerOff,
  FaCrown,
  FaHistory,
  FaLayerGroup,
} from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import Profile from './Profile';
import Category from './Category';
import Trending from './Trending';
import History from './History';
import Logout from './Logout';
import Link from 'next/link';
import Footer from '../homepage/Footer/Footer';
const UserDashboard = () => {
  const [nav, setNav] = useState('profile');
  return (
    <>
      <div className={style.dashboard}>
        {/* Navbar for wider screen */}
        <div className={style.dashnav}>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('profile');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
                document.getElementById('container').scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'profile' ? 'wheat' : 'gray'}` }}
          >
            Profile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaUserAlt />{' '}
          </p>
          <hr className="divider"></hr>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('category');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'category' ? 'wheat' : 'gray'}` }}
          >
            Category <FaLayerGroup />
          </p>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('trending');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'trending' ? 'wheat' : 'gray'}` }}
          >
            Trending <FaCrown />
          </p>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('history');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'history' ? 'wheat' : 'gray'}` }}
          >
            Uploads &nbsp; <FaHistory />
          </p>
          <hr className="divider"></hr>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('logout');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{
              color: `${nav === 'logout' ? 'rgb(218, 84, 84)' : 'gray'}`,
            }}
          >
            Logout <FaPowerOff />
          </p>
        </div>

        {/* Navbar for mobile screen */}
        <div className={style.dashnav_mobile}>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('profile');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'profile' ? 'wheat' : 'gray'}` }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaUserAlt />
            <span className={style.text_mobile}>Profile</span>
          </p>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('category');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'category' ? 'wheat' : 'gray'}` }}
          >
            <FaLayerGroup />
            <span className={style.text_mobile}>Category</span>
          </p>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('trending');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'trending' ? 'wheat' : 'gray'}` }}
          >
            {' '}
            <FaCrown />
            <span className={style.text_mobile}>Trending</span>
          </p>

          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('history');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{ color: `${nav === 'history' ? 'wheat' : 'gray'}` }}
          >
            {' '}
            &nbsp;
            <FaHistory />
            <span className={style.text_mobile}>History</span>
          </p>
          <Link scroll={true} href="/">
            <p
              className={style.navtext}
              onClick={(r) => {
                setNav('home');
                if (process.browser) {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                }
              }}
              style={{ color: `${nav === 'home' ? 'wheat' : 'gray'}` }}
            >
              {' '}
              <AiFillHome />
              <span className={style.text_mobile}>Home</span>
            </p>
          </Link>
          <p
            className={style.navtext}
            onClick={(r) => {
              setNav('logout');
              if (process.browser) {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }
            }}
            style={{
              color: `${nav === 'logout' ? 'rgb(218, 84, 84)' : 'gray'}`,
            }}
          >
            <FaPowerOff />
            <span className={style.text_mobile}>Logout</span>
          </p>
        </div>
        <div
          className={[style.dashcontent, style.dashcontent_mobile].join(' ')}
        >
          {nav === 'profile' && <Profile />}
          {nav === 'trending' && <Trending />}
          {nav === 'category' && <Category />}
          {nav === 'history' && <History />}
          {nav === 'logout' && <Logout />}
          <br />
          <hr className="divider"></hr>
          <br />
          <p style={{ color: 'gray', fontSize: 'x-small' }}>
            © {/* <Link scroll={true} href="https://devbucket.tech/"> */}
            <span style={{ color: 'rgb(163, 151, 130)', cursor: 'pointer' }}>
              Devbucket
            </span>
            {/* </Link>{' '} */}
            2021, All rights reserved
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
