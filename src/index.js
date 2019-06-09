import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux imports 

import { Provider } from 'react-redux';

// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './redux/reducers/rootReducer';
// import thunk from 'redux-thunk'

import appStore from './redux/store/store'

import { fetchPostsData } from './redux/actions/postActions';
import { fetchUsersData } from './redux/actions/userActions';


// console.log(fetchPostsData)

// const initState = {};

// const middleware = [
//     thunk
// ]

// const appStore = createStore(
//     rootReducer, 
//     initState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

// gets data on initial site load
appStore.dispatch(fetchPostsData())
appStore.dispatch(fetchUsersData())


ReactDOM.render(
<Provider store={appStore}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
