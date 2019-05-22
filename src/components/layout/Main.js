import React from 'react';
import { Switch, Route } from 'react-router-dom';

// view components
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Posts from '../views/Posts';
import Users from '../views/Users';
import ApiPosts from '../views/ApiPosts';

const Main = () => {
    return(
        <div>
            Main
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/posts" component={Posts} />
                <Route path="/users" component={Users} />
                <Route path="/apiposts" component={ApiPosts} />
            </Switch>
        </div>
    )
}

export default Main;