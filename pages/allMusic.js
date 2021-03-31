import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllMusic } from '../actions/musicActions'
import style from '../styles/AllMusic.module.css'
import Footer from '../components/homepage/Footer/Footer'
import Loader from '../components/Loader/Loader'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { toast } from 'react-toastify'

const allMusic = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllMusic())
    }, [])
    const music = useSelector(state => state.music)
    if (!music.musics)
        return (
            <div className={style.container}>
                <Loader loading={true}/>
            </div>
        )
    return (
        <>
        <div className={style.container}>
            {music.musics.map(m => (
                <div className={style.row}>
                    <img className={style.image} src={`https://source.unsplash.com/random/300x200?sig=${Math.random()}`} alt="Ran" height="70px" width="70px" />
                    <AudioPlayer
                        src={`data:audio/wav;base64,${Buffer.from(m.audiobuffer?.data).toString('base64')}`}
                        onPlay={(e) => {toast.success(`Playing ${m.name}`)}}
                        onError={(e) => { toast.error("Internal Server Error") }}
                    />
                    <div className={style.details}>
                        <p className={style.common}>Music</p>
                        <p className={style.bold}>{m.name}</p>
                    </div>
                </div>
            ))}
        </div>
        <Footer/>
        </>
    )
}

export default allMusic
