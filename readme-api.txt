Setting up api-to-redux connection (example)

- Install axios:
    $ npm install axios

- Create action type:
    src/redux/actions/actionTypes.js
    eg 
    export const FETCH_API_POSTS = 'FETCH_API_POSTS';

- Create action file: (api call goes in here - axios or fetch)
    src/redux/actions/apiPostsActions.js
    import the relevant action type
    create fetchApiPosts function to get data axios api call

- Create reducer file:
    src/redux/reducers/apiPostsReducer.js
    import the relevant action type

- Import reducer into rootReducer.js (which is already imported into store.js)

- Create receiving component
    src/components/views/ApiPosts.js
    import fetchApiPosts from src/redux/actions/apiPostsActions
    call fetchApiPosts function in componentDidMount hook

- Add component to navigation
    import into src/components/layout/Main.js and create root
    add link to navigation file src/components/partials/Navigation.js





    



