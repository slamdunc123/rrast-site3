// using axios
import { FETCH_API_POSTS } from './actionTypes'

import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/posts";

export function fetchApiPosts(){
    return(dispatch)=>{
        return axios.get(apiURL)
        .then((response)=>{
            dispatch({
                type: FETCH_API_POSTS,
                payload: response.data
            }); 
        })
    }
}


// using fetch
// import { FETCH_API_POSTS } from './actionTypes'

// const apiURL = "https://jsonplaceholder.typicode.com/posts";

// export function fetchApiPosts(){
//     return function(dispatch){
//         fetch('apiURL')
//         .then(res => res.json())
//         .then(apiPosts => dispatch({
//             type: FETCH_API_POSTS,
//             payload: apiPosts
//         }))
//     }
// }


// same as above but using ES6
// export const fetchApiPosts = () => dispatch => {
//     console.log('fetching');
//         fetch('apiURL')
//         .then(res => res.json())
//         .then(apiPosts => dispatch({
//             type: FETCH_API_POSTS,
//             payload: apiPosts
//         }))
// }
