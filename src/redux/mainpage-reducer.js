import {giphyAPI,} from "../api/api";

const SET_GIF = 'SET_GIF';
const SET_SEARCH_GIF = 'SET_SEARCH_GIF';
const ON_PRELOADER = 'ON_PRELOADER';

let initialState = {
    data: [],
    dataSearch: [],
    preload: false,
    someString: 'hello world'
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GIF: {
            return {...state, data: action.data}
        }

        case SET_SEARCH_GIF: {
            return {...state, dataSearch: action.data}
        }

        case ON_PRELOADER: {
            return {...state, preload: action.isTrue}
        }

        default:
            return state
    }
}
export const setGif = () => async (dispatch) => {

    dispatch(preloaderAc(true))
    let data = await giphyAPI.getGiphyData()
    dispatch(setGivAC(data.data))
    dispatch(preloaderAc(false))
}


export const setSearchGif = (text) => async (dispatch) => {
    dispatch(preloaderAc(true))
    let data = await giphyAPI.getSearchGiphyData(text)
    dispatch(preloaderAc(false))
    dispatch(setSearchGivAC(data.data))
}

export default mainPageReducer
export const setGivAC = (data) => ({type: SET_GIF, data})
export const setSearchGivAC = (data) => ({type: SET_SEARCH_GIF, data})
export const preloaderAc = (isTrue) => ({type: ON_PRELOADER, isTrue})