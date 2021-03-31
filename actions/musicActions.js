import axios from 'axios'
import cookie from 'js-cookie'
import { GET_MUSIC, LOADING } from './type'

export const getAllMusic = () => async dispatch => {
    try {
        dispatch({type: LOADING})
        const res = await axios.get("https://vovoca.herokuapp.com/api/music")
        dispatch({
            type: GET_MUSIC,
            payload: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}