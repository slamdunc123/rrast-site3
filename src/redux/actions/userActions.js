import actionTypes from '../actions/actionTypes'
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsersData = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
          console.log(response)
        dispatch(fetchUsers(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchUsers = (data) => {
  return {
    type: actionTypes.FETCH_USERS_DATA,
    data
  }
  
};

export const deleteUser = (id) => { // need only the id (or array index) to Delete the object
    return {
        type: actionTypes.DELETE_USER,
        id: id
    }
}

export const updateUser = (id, name, username, email, suite, street, city, zipcode) => { // need id (or array index) and field/s being edited to Edit the object
    return {
        type: actionTypes.UPDATE_USER,
        id: id,
        name: name,
        username: username,
        email: email,
        suite: suite,
        street: street,
        city: city,
        zipcode: zipcode
    }
}

export const addUser = (id, name, username, email, suite, street, city, zipcode) => { // need to include all relevant fields to Add a new object
    return {
        type: actionTypes.ADD_USER,
        id: id,
        name: name,
        username: username,
        email: email,
        suite: suite,
        street: street,
        city: city,
        zipcode: zipcode
    }
}