import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './MusicCard.module.css';
<<<<<<< HEAD
import { toast } from 'react-toastify';
import { FaGetPocket } from 'react-icons/fa'
import Link from 'next/link'
=======
import { toast, ToastContainer } from 'react-toastify';
import { FaGetPocket } from 'react-icons/fa';
import Link from 'next/link';
>>>>>>> 9f9ac389bff1b22e63aeb25394cae9737e6f92a6

const music = ({ music, history }) => {
  return (
    <div className={style.row}>
      <img
        className={style.image}
        src={music.image}
        alt="Ran"
        height="70px"
        width="70px"
      />
      <AudioPlayer
        className={[style.rhap_containe, style.rhap_controls_section,style.rhap_main_controls_button].join(' ')}
        autoPlayAfterSrcChange={false}
        layout={'horizontal'}
        src={`data:audio/wav;base64,${Buffer.from(
          music.audiobuffer?.data
        ).toString('base64')}`}
        onError={(e) => {
          toast.error('Internal Server Error');
        }}
      />
<<<<<<< HEAD
      <Link href={`/music/${encodeURIComponent(music._id)}`}>
        <button style={{cursor: 'pointer'}}>
          <FaGetPocket style={{ color: 'wheat', fontSize: '35px' }} />
=======
      <Link href={`/music/${encodeURIComponent(music._id)}`} replace>
        <button style={{ cursor: 'pointer' }} className={style.music_button}>
          <FaGetPocket
            style={{ color: 'wheat' }}
            className={style.music_icon}
          />
>>>>>>> 9f9ac389bff1b22e63aeb25394cae9737e6f92a6
        </button>
      </Link>
    </div>
  );
};

export default music;
