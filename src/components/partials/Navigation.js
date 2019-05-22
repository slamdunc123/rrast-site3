import React, { Component } from 'react';

import { Link } from 'react-router-dom'; // Links only are required in this component
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
        this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
        this.state = {
            isOpen: false
        };
    }

    // toggle burger menu when clicked
    toggleBurgerMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });


    }
    // toggle burger menu when menu link is clicked
    closeBurgerMenu() {
        if (this.state.isOpen === true) {
            this.toggleBurgerMenu();

        }
    }

    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="md">
                    <NavbarBrand href="/">rrast-site3</NavbarBrand>
                    <NavbarToggler onClick={this.toggleBurgerMenu} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/">Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/about">About</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/contact">Contact</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/posts">Posts</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/users">Users</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/apiposts">ApiPosts</Link></NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/partials">Partials</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/randomusers">RandomUsers</Link></NavLink>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/personlist">PersonList</Link></NavLink>
                            </NavItem> */}

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;


