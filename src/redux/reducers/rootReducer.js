// redux imports
import { combineReducers } from 'redux'
// import data from './postsReducer';

//  created reducers
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer
})
// console.log(posts)
export default rootReducer;