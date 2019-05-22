import actionTypes from '../actions/actionTypes'

const initState = {
    posts: [
        { id: '1', title: 'Post 1'},
        { id: '2', title: 'Post 2'},
        { id: '3', title: 'Post 3'}
    ]
}

const postsReducer = (state = initState, action) => {
    console.log(action);
    console.log(action.id, action.title);
    switch(action.type){
        
        // DELETE POST
        case actionTypes.DELETE_POST:
            const newStateDeletePost = state.posts.filter((post) => post.id !== action.id);
            // return Object.assign({}, state, {posts: newStatePosts}); //either of these work
            return {
                ...state,
                posts: newStateDeletePost
            };
        
        // UPDATE POST
        case actionTypes.UPDATE_POST:
            const newStateUpdatePost = state.posts.map(post => {
                console.log(post.id, post.title)
                console.log(action.id, action.title)
                if (post.id === action.id) {
                    post.title = action.title;
                    console.log('yes ', post.title)
                }
                return post;
            });
            console.log(newStateUpdatePost)
            return {
                ...state,
                posts: newStateUpdatePost
            };
           
        // ADD POST
        case actionTypes.ADD_POST:
            const newStateAddPost = state.posts.concat([{id:action.id, title:action.title}]);
            console.log(newStateAddPost);
            // return Object.assign({}, state, {posts: newStatePosts}); //either of these work
            return {
                ...state,
                posts: newStateAddPost
            };

        // DEFAULT
        default:
            return state
    }
    
}

export default postsReducer