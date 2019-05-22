import { FETCH_API_POSTS } from '../actions/actionTypes'

const initState = {
    apiposts: []
}

const apiPostsReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_API_POSTS:
            return {
                ...state,
                apiposts: action.payload
            }
        default:
            return state
    }
}

export default apiPostsReducer