import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getTrendingMusic} from '../../actions/musicActions'
import Music from "../../components/music/music";
import Loader from '../Loader/Loader';

const Trending = () => {
    const dispatch = useDispatch()
    const trending_music = useSelector(state => state.music.trending_music)
    
    useEffect(() => {
        dispatch(getTrendingMusic())
    }, [])

    return (
        <div id="container">
                <h1>Trending Music</h1>
            { trending_music ?((trending_music.map((i)=>(
                <Music music={i}/>
                
            )))):(<Loader loading={true}/>)
           }
        </div>
    )
}

export default Trending
