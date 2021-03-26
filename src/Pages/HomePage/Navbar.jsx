import React,{useEffect,useState} from 'react';
import '../../Static/css/Navbar.css';
const Navbar = () => {
  const [scrollState, setScrollState] = useState("top")
  useEffect(() => {
    const listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop

      if (scrolled >= 1) {
        if (scrollState !== "down") {
          setScrollState("down")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })

    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  return (
<>
<div className={`${scrollState !="top"?("navbar-box scroll-header"):("navbar-box")}`}>
      {console.log(scrollState)}
      <div class="neon">♪♪ VOVOCA</div>
      <div className="nav-bar">
        <ul className="nav-items">
          <li className="list-items">Home</li>
          <li className="list-items">Features</li>
          <li className="list-items">Trending</li>
          <li className="list-items">About</li>
          <li className="list-items">Contact</li>
          <button className="butn">Login</button>
        </ul>
      </div>
    </div>
    <div class="navigation">
    <div className="mobile-header">
    <div class="neon">♪♪ VOVOCA</div>
    <button className="butn">Get Started</button>
    </div>
    <input type="checkbox" id="navi-toggle" class="navigation__checkbox" />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">
        <span class="navigation__icon-span"></span>
        <span class="navigation__icon-span"></span>
        <span class="navigation__icon-span"></span>
        <span class="navigation__icon-span"></span>
        <span class="navigation__icon-span"></span>
        <span class="navigation__icon-span"></span>
      </span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link">About Natours</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Your Benefits</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Popular Tours</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Stories</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Book Now</a>
        </li>
      </ul>
    </nav>
  </div>
</>
  );
};

export default Navbar;
