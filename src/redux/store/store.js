import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk'

// import { fetchPostsData } from '../actions/postActions';

// console.log(fetchPostsData)

const initState = {};

const middleware = [
    thunk
]

const appStore = createStore(
    rootReducer, 
    initState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// appStore.dispatch(fetchPostsData)

export default appStore;