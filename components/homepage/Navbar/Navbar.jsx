import React,{useEffect,useState} from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
  const [scrollState, setScrollState] = useState("top")
  // useEffect(() => {
  //   const listener = document.addEventListener("scroll", e => {
  //     var scrolled = document.scrollingElement.scrollTop

  //     if (scrolled >= 1) {
  //       if (scrollState !== "down") {
  //         setScrollState("down")
  //       }
  //     } else {
  //       if (scrollState !== "top") {
  //         setScrollState("top")
  //       }
  //     }
  //   })

  //   return () => {
  //     document.removeEventListener("scroll", listener)
  //   }
  // }, [scrollState])
  return (
<>
<div className={scrollState !== "top" ? ([style.navbar__box, style.scroll__header].join(' ')) : (style.navbar__box)}>
        <div className={style.neon}>VOVOCA</div>
        <div className={style.nav__bar}>
          <ul className={style.nav__items}>
          <li className={style.list__items}>Home</li>
          <li className={style.list__items}>Features</li>
          <li className={style.list__items}>Trending</li>
          <li className={style.list__items}>About</li>
          <li className={style.list__items}>Contact</li>
            <button style={{marginLeft: '15px', paddingTop: '0.5em', paddingBottom: '0.5em', fontSize: '1.1em'}} className={style.butn}>Login</button>
        </ul>
      </div>
    </div>
    <div className={style.navigation}>
    <div className={style.mobile__header}>
    <div className={style.neon}>VOVOCA</div>
    <button className={[style.btn, style.getStarted__btn].join(' ')}>Get Started</button>
    </div>
        <input type="checkbox" id="navi-toggle" className={style.navigation__checkbox} />

    <label htmlFor="navi-toggle" className={style.navigation__button}>
      <span className={style.navigation__icon}>
        <span className={scrollState !== "down" ? (style.navigation__icon__span) : ('')}></span>
        <span className={scrollState !== "down" ? (style.navigation__icon__span) : ('')}></span>
        <span className={scrollState !== "down" ? (style.navigation__icon__span) : ('')}></span>
        <span className={scrollState !== "down" ? (style.navigation__icon__span) : ('')}></span>
        <span className={scrollState !== "down" ? (style.navigation__icon__span) : ('')}></span>
        <span className={scrollState !== "down" ? (style.navigation__icon__span) : ('')}></span>
      </span>
    </label>

        <div className={style.navigation__background}>&nbsp;</div>

    <nav className={style.navigation__nav}>
      <ul className={style.navigation__list}>
        <li className={style.navigation__item}>
          <a href="#" className={style.navigation__link}>Home</a>
        </li>
        <li className={style.navigation__item}>
          <a href="#" className={style.navigation__link}>Features</a>
        </li>
        <li className={style.navigation__item}>
          <a href="#" className={style.navigation__link}>Trending</a>
        </li>
        <li className={style.navigation__item}>
          <a href="#" className={style.navigation__link}>About</a>
        </li>
        <li className={style.navigation__item}>
          <a href="#" className={style.navigation__link}>Contact us</a>
        </li>
      </ul>
    </nav>
  </div>
</>
  );
};

export default Navbar;
