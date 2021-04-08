import React, { useEffect, useState } from 'react'
import style from './scrollToTop.module.css'
import { HiArrowCircleUp } from 'react-icons/hi'

const ScrollButton = () => {

    const onClick = (e) => {
        if (process.browser) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }
  const [scrollState, setScrollState] = useState('top');
    useEffect(() => {
        if (process.browser) {
            const listener = document.addEventListener('scroll', (e) => {
                var scrolled = document.scrollingElement.scrollTop;
                const btn = document.getElementById('goToTop')
                if (scrolled >= 1) {
                    if (scrollState !== 'down') {
                        setScrollState('down');
                        btn.style.display = 'block'
                    }
                } else {
                    if (scrollState !== 'up') {
                        setScrollState('up');
                        btn.style.display = 'none'
                    }
                }
            });

            return () => {
                document.removeEventListener('scroll', listener);
            };
        }
  }, [scrollState]);

    return (
        <div id="goToTop" className={style.button} onClick={() => onClick()}> 
            <HiArrowCircleUp/>
        </div>
    )
}

export default ScrollButton
