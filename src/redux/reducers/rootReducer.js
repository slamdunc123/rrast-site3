// redux imports
import { combineReducers } from 'redux'

//  created reducers
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'
import apiPostsReducer from './apiPostsReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    apiposts: apiPostsReducer
})

export default rootReducer;