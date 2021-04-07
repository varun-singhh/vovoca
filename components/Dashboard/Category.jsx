import axios from 'axios';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import React, { useEffect, useState } from 'react';
import music from '../music/music';
import style from './Category.module.css';
import Music from '../../components/music/music';
import Loader from '../Loader/Loader';

const Category = () => {
  const selected_category = [];
  const [count, setCount] = useState(0);
  const [category_search, setCategory_search] = useState(0);
  const [categorised_music, setCategorised_music] = useState([]);

  async function getCategories() {
    setCategory_search(1);
    console.log(selected_category.length);
    try {
      const res = await axios.get(
        `https://vovoca.herokuapp.com/api/music/?category=${selected_category.join(
          '+'
        )}`
      );
      console.log(res.data);
      setCategorised_music(res.data.data);
      setTotal_pages(res.data.totalPages);
    } catch {
      console.error('error');
    }
  }

  const clear_category = () => {
    setCategory_search(0);
    setCategorised_music([]);
  };

  function handleClick(e, category) {
    if (process.browser) {
      if (selected_category.indexOf(category.toLowerCase()) !== -1) {
        console.log(selected_category.indexOf(category.toLowerCase()));
        selected_category.splice(
          selected_category.indexOf(category.toLowerCase()),
          1
        );
      } else {
        selected_category.push(category.toLowerCase());
      }

      const param = document.getElementById(e);
      const classes = param.classList;

      if (classes.length === 1) {
        param.classList.add('Category_selected__k-mej');
      } else {
        param.classList.remove('Category_selected__k-mej');
      }

      console.log(selected_category.length);
    }
  }

  return (
    <>
      {category_search === 1 ? (
        <div>
          <h3>Top Searches</h3>
          {console.log(categorised_music)}
          {categorised_music.length !== 0 ? (
            categorised_music?.map((i) => <Music music={i} />)
          ) : (
            <Loader />
          )}
          <button className={style.clear_btn} onClick={() => clear_category()}>
            Clear Category
          </button>
        </div>
      ) : (
        <div className={style.category}>
          <div className={style.container}>
            <div className={style.row}>
              <div className={style.category__card}>
                <div
                  id="1"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5mac.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2Fapple-music-rap-life.jpeg%3Fresize%3D1024%2C576&f=1&nofb=1)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Hip-Hop')}
                >
                  <div className={style.heading}>
                    <h3>Hip-Hop</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="2"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Bass')}
                >
                  <div className={style.heading}>
                    <h3>Bass</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="3"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Chill')}
                >
                  <div className={style.heading}>
                    <h3>Chill</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="4"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://imageproxy.themaven.net//https%3A%2F%2Fimages.saymedia-content.com%2F.image%2FMTc0NDUyMjI0MzcyNTE2NDg2%2F200-greatest-bollywood-dance-songs-dance-hits-for-parties.jpg)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Beats')}
                >
                  <div className={style.heading}>
                    <h3>Beats</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="5"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_491119158_283701.jpg)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Musical')}
                >
                  <div className={style.heading}>
                    <h3>Musical</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.category__card}>
                <div
                  id="6"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://cdn.shopify.com/s/files/1/1728/2157/articles/37.jpg?v=1552935505)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Slow')}
                >
                  <div className={style.heading}>
                    <h3>Slow</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="7"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpodcasts.nickware.ru%2Fedm%2Flogo.jpeg&f=1&nofb=1")`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'EDM')}
                >
                  <div className={style.heading}>
                    <h3>EDM</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="8"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Electric')}
                >
                  <div className={style.heading}>
                    <h3>Electric</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="9"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://www.theeapts.com/blog/wp-content/uploads/sites/3997/2019/10/wpid-microphone2.jpg)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'Vocal')}
                >
                  <div className={style.heading}>
                    <h3>Vocal</h3>
                  </div>
                </div>
              </div>
              <div className={style.category__card}>
                <div
                  id="10"
                  className={style.category__card__icon}
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                  }}
                  onClick={(e) => handleClick(e.target.id, 'House')}
                >
                  <h3>House</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={style.search_btn}>
            <button onClick={() => getCategories()}>Search</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
