import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './MusicCard.module.css';
import { toast, ToastContainer } from 'react-toastify';

const music = ({ music }) => {
  return (
    <div className={style.row}>
      {/* <ToastContainer
        hideProgressBar={true}
        closeButton={false}
        position="top-center"
      /> */}
      <img
        className={style.image}
        src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`}
        alt="Ran"
        height="70px"
        width="70px"
      />
      <AudioPlayer
        src={`data:audio/wav;base64,${Buffer.from(
          music.audiobuffer?.data
        ).toString('base64')}`}
        onPlay={(e) => {
          toast.success(`Playing ${music.name}`);
        }}
        onError={(e) => {
          toast.error('Internal Server Error');
        }}
      />
      <div className={style.details}>
        <p className={style.common}>Music</p>
        <p className={style.bold}>{music.name}</p>
      </div>
    </div>
  );
};

export default music;
