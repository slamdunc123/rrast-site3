import actionTypes from '../actions/actionTypes'
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPostsData = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
          console.log(response)
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPosts = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_DATA,
    data
  }
  
};

export const deletePost = (id) => { // need only the id (or array index) to Delete the object
    return {
        type: actionTypes.DELETE_POST,
        id: id
    }
}

export const updatePost = (id, title) => { // need id (or array index) and field/s being updated to Update the object
    return {
        type: actionTypes.UPDATE_POST,
        id: id,
        title: title
    }
}

export const addPost = (id, title) => { // need to include all relevant fields to Add a new object
    return {
        type: actionTypes.ADD_POST,
        id: id,
        title: title
    }
}