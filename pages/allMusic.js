import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllMusic } from '../actions/musicActions'
import style from '../styles/AllMusic.module.css'
import Footer from '../components/homepage/Footer/Footer'
import Loader from '../components/Loader/Loader'
import Music from '../components/music/music'

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
                <Music music={m}/>
            ))}
        </div>
        <Footer/>
        </>
    )
}

export default allMusic
