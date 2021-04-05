import React, { useEffect } from 'react';
import { FaGetPocket } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLatestMusic,
  getTrendingMusic,
} from '../../../actions/musicActions';
import style from './Guest.module.css';
import Link from 'next/link';
import Loader from '../../Loader/Loader';

const Guest = () => {
  const dispatch = useDispatch();
  const trending_music = useSelector((state) => state.music.trending_music);
  const latest_music = useSelector((state) => state.music.latest_music);
  useEffect(() => {
    dispatch(getTrendingMusic());
    dispatch(getLatestMusic());
  }, []);

  return (
    <div id="features">
      <div className={style.guest}>
        <div className={[style.guest__chart, style.mobile__chart].join(' ')}>
          <div className={style.pricing__body}>
            <h1 className={style.trend__heading}>Latest</h1>
            <hr className="divider" />
            {latest_music ? (
              latest_music.slice(0, 3).map((i, index) => (
                <div className={style.song__box}>
                  <div
                    className={style.music__cover}
                    style={{
                      backgroundImage: `url(${i.image})`,
                    }}
                  ></div>

                  <p className={style.song__name}>{i.name.charAt(0).toUpperCase() + i.name.slice(1)}</p>

                  <Link href={`/music/${encodeURIComponent(i._id)}`} replace>
                    <button
                      style={{ cursor: 'pointer' }}
                      className={style.music_button}
                    >
                      <FaGetPocket
                        style={{ color: 'wheat' }}
                        className={style.music_icon}
                      />
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <Loader loading={true} />
            )}
          </div>

          <div className={style.pricing__body}>
            <h1 className={style.trend__heading}>Trending</h1>
            <hr className="divider" />

            {trending_music ? (
              trending_music.slice(0, 3).map((i, index) => (
                <div className={style.song__box}>
                  <div
                    className={style.music__cover}
                    style={{
                      backgroundImage: `url(${i.image})`,
                    }}
                  ></div>

                  <p className={style.song__name}>{i.name.charAt(0).toUpperCase() + i.name.slice(1)}</p>
                  <Link href={`/music/${encodeURIComponent(i._id)}`} replace>
                    <button
                      style={{ cursor: 'pointer' }}
                      className={style.music_button}
                    >
                      <FaGetPocket
                        style={{ color: 'wheat'}}
                        className={style.music_icon}
                      />
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <Loader loading={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
