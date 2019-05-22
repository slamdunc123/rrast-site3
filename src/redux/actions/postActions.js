import actionTypes from '../actions/actionTypes'

export const deletePost = (id) => { // need only the id (or array index) to Delete the object
    return {
        type: actionTypes.DELETE_POST,
        id: id
    }
}

export const updatePost = (id, title) => { // need id (or array index) and field/s being edited to Edit the object
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