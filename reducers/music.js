import { GET_MUSIC, LOADING } from '../actions/type'

const initialState = {
    musics: null,
    music: null,
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case GET_MUSIC:
            return {
                ...state,
                musics: action.payload,
            }
        default:
            return state
    }
}

export default reducer