import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './MusicCard.module.css';
import { toast, ToastContainer } from 'react-toastify';
import { FaGetPocket } from 'react-icons/fa'
import Link from 'next/link'

const music = ({ music, history }) => {
  return (
    <div className={style.row}>
      {/* <ToastContainer
        hideProgressBar={true}
        closeButton={false}
        position="top-center"
      /> */}
      <img
        className={style.image}
        src={music.image}
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
        onError={(e) => {
          toast.error('Internal Server Error');
        }}
      />
      <Link href={`/music/${encodeURIComponent(music._id)}`} replace>
        <button style={{cursor: 'pointer'}}>
          <FaGetPocket style={{ color: 'wheat', fontSize: '35px' }} />
        </button>
      </Link>
    </div>
  );
};

export default music;
