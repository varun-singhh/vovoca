import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./Trending.module.css"
import {getTrendingMusic} from '../../actions/musicActions'
import Music from "../../components/music/music";
import axios from 'axios';
import Loader from '../Loader/Loader';

const Trending = () => {
    const dispatch = useDispatch()
    const trending_music = useSelector(state => state.music.trending_music)
    console.log(trending_music)
    useEffect(() => {
        dispatch(getTrendingMusic())
    }, [])

    return (
        <div>
            { trending_music ?((trending_music.map((i)=>(
                <Music music={i}/>
                
            )))):(<Loader loading={true}/>)
           }
        </div>
    )
}

export default Trending
