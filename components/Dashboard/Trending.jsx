import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./Trending.module.css"
import {getTrendingMusic} from '../../actions/musicActions'
import Music from "../../components/music/music";
import axios from 'axios';

const Trending = () => {
    const dispatch = useDispatch()
    const trending_music = useSelector(state => state.music.musics)
    useEffect(() => {
        dispatch(getTrendingMusic())
    }, [])

    return (
        <div>
            <h1>This is Trending Component</h1>
            {console.log(trending_music)}
            { !trending_music?.data && (trending_music?.map((i)=>(
                <Music music={i}/>
                
            )))
           }
        </div>
    )
}

export default Trending
