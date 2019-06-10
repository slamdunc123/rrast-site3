import actionTypes from '../actions/actionTypes'

const initState = {
    users: [
        // { id: '1', name: 'User 1'},
        // { id: '2', name: 'User 2'},
        // { id: '3', name: 'User 3'}
    ]
}

const usersReducer = (state = initState, action) => {
    console.log(state);
    console.log(action);
    console.log(action.name);
    console.log(action.email);
    // console.log(action.id, action.name);
    switch(action.type){

        case actionTypes.FETCH_USERS_DATA:
            return {
                ...state,
                users: action.data
            }
        
        // DELETE USER
        case actionTypes.DELETE_USER:
            const newStateDeleteUser = state.users.filter((user) => user.id !== action.id);
            // return Object.assign({}, state, {users: newStateUsers}); //either of these work
            return {
                ...state,
                users: newStateDeleteUser
            };
        
        // UPDATE USER
        case actionTypes.UPDATE_USER:
            const newStateUpdateUser = state.users.map(user => {
                console.log(user.id, user.name)
                console.log(action.id, action.name)
                if (user.id === action.id) {
                    user.name = action.name;
                    user.username = action.username;
                    user.email = action.email;
                    user.address.suite = action.suite;
                    user.address.street = action.street;
                    user.address.city = action.city;
                    user.address.zipcode = action.zipcode;
                    console.log('yes ', user.name)
                }
                return user;
            });
            console.log(newStateUpdateUser)
            return {
                ...state,
                users: newStateUpdateUser
            };
           
        // ADD USER
        case actionTypes.ADD_USER:
            const newStateAddUser = state.users.concat([{
                id: action.id, 
                name: action.name, 
                username: action.username, 
                email: action.email, 
                address: {
                    suite: action.suite, 
                    street: action.street,
                    city: action.city,
                    zipcode: action.zipcode
                }
                
            }]);
            console.log(newStateAddUser);
            // return Object.assign({}, state, {users: newStateUsers}); //either of these work
            return {
                ...state,
                users: newStateAddUser
            };

        // DEFAULT
        default:
            return state
    }
    
}

export default usersReducer