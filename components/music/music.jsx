import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './MusicCard.module.css';
import { toast, ToastContainer } from 'react-toastify';
import {IoIosShareAlt} from 'react-icons/io'

const music = ({ music }) => {
  return (
    <div className={style.row}>
      <img
        className={style.image}
        src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`}
        alt="Ran"
        height="70px"
        width="70px"
      />
      <AudioPlayer 
      autoPlayAfterSrcChange={false}
      layout={'horizontal'}
        src={`data:audio/wav;base64,${Buffer.from(
          music.audiobuffer?.data
        ).toString('base64')}`}
        onPlay={(e) => {
          toast.success(`Playing ${music.name}`);
        }}
        onError={(e) => {
          toast.error('Something went wrong');
        }}
      />
      <div className={style.details}>
        <p className={style.common}>Music</p>
        <p className={style.bold}>{music.name}</p>
      </div>
      <IoIosShareAlt/>
    </div>
  );
};

export default music;
