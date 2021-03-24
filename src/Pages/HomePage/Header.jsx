import React from 'react';
import '../../Static/css/Header.css';
const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div class="container">
          <div class="neon">Vovoca </div>
        </div>
        <ul className="nav-items">
          <li className="list-items">Home</li>
          <li className="list-items">Features</li>
          <li className="list-items">Trending</li>
          <li className="list-items">About</li>
          <li className="list-items">Contact</li>
          <button className="butn">Login</button>
        </ul>
      </nav>
      <div className="header-info">
        <div>
          <p className="banner-heading">
            #Tune you work with Trending Royalty free Music
          </p>
          <p className="banner-sub-heading">
            Welcome to Neon, an award-winning & easy-to-use mobile application
            that revolutionizes your daily work tasks.
          </p>
          <button className="btn">Join us Now</button>
        </div>
        <img
          src="https://ld-wt73.template-help.com/tf/neon_tf_v2/media/image-01-827x730.png"
          className="banner-image"
        />
      </div>
      <div className="vovoca-markdown">
        <p className="vovoca-name">VOVOCA</p>
      </div>
      <div className="header">
        <svg
          class="image-svg"
          width="1520"
          height="792"
          viewBox="0 0 1920 792"
          fill="none"
        >
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
              <stop offset="0" stop-color="#323436"></stop>
              <stop offset="1" stop-color="#02B8A2"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Header;
