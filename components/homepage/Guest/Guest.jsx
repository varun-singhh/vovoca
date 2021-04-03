import React, {useEffect} from 'react';
import { FaGetPocket } from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux'
import { getTrendingMusic } from '../../../actions/musicActions';
import style from './Guest.module.css';
import Link from 'next/link'


const Guest = () => {
  const dispatch = useDispatch()
  const trending_music = useSelector(state => state.music.musics)
  useEffect(() => {
    dispatch(getTrendingMusic())
  },[])

  return (
    <div id="features">
      <div className={style.guest}>
        <div className={[style.guest__chart, style.mobile__chart].join(' ')}>
          <div className={style.pricing__body}>
          <h1 className={style.trend__heading}>Latest</h1>
            <hr className="divider"/>
            <div className={style.song__box}>
              <div
                className={style.music__cover}
                style={{
                  backgroundImage: `url("https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000779_3.png")`,
                }}
              ></div>
              <p className={style.song__name}>Name</p>
              <p className={style.song__rank}>#1</p>
            </div>
            <div className={style.song__box}>
              <div
                className={style.music__cover}
                style={{
                  backgroundImage: `url("https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000779_3.png")`,
                }}
              ></div>
              <p className={style.song__name}>Name</p>
              <p className={style.song__rank}>#2</p>
            </div>
            <div className={style.song__box}>
              <div
                className={style.music__cover}
                style={{
                  backgroundImage: `url("https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000779_3.png")`,
                }}
              ></div>
              <p className={style.song__name}>Name</p>
              <p className={style.song__rank}>#3</p>
            </div>
          </div>


          <div className={style.pricing__body}>
            <h1 className={style.trend__heading}>Trending</h1>
          <hr className="divider" />
          {console.log(trending_music)}
          {trending_music && trending_music.data?.splice(2).map((i, index)=>(
            <div className={style.song__box}>
              <div
              className={style.music__cover}
                style={{
                  backgroundImage: `url(${i.image})`,
                }}
              ></div>
              {console.log(i)}
              <p className={style.song__name}>{i.name}</p>
              <Link href={`/music/${encodeURIComponent(i._id)}`} replace>
              <button style={{cursor: 'pointer'}}
             
              >
                  <FaGetPocket style={{ color: 'wheat', fontSize: '35px' }} />
              </button>
          </Link>
            </div>
          ))}      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
