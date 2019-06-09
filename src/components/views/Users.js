import React, { Component } from 'react'

import { Modal, ModalBody } from 'reactstrap'

// import UserAdd from './UserAdd'

// redux imports
import { connect } from 'react-redux';
import { deleteUser, updateUser, addUser } from '../../redux/actions/userActions'

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addForm: false,
            editForm: false,
            userInfo: false,
            usersTable: true,
            users: [],
            id: '',
            name: '',
            username: '',
            email: '',
            address: {},
            message: '',
            modal: false,
            userInfoModal: false,
            userAddModal: false
        }


        // this.handleUpdateUser = this.handleUpdateUser.bind(this);
    }

    // *** SHOW ALL USERS ***

    // render users table
    renderUsersTable() {
       
        if (this.state.usersTable) {
            return (
                <div>
                    {/* button to show add form */}
                    <button className="btn btn-info" onClick={() => this.setState({ userAddModal: true })}>Add</button>

                   
                    <div className="d-flex p-3 flex-wrap bg-secondary"> 
                    {this.props.users.map(user =>

                    
                        
                        <div className="card m-3 " key={user.id}>
                            <div className="card-header">{user.id}</div>
                            <div className="card-body">{user.name}</div>
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={() => this.handleInfoUser(user.id, user.name, user.email, user.address)}>Info</button>&nbsp;
                                <button className="btn btn-danger" onClick={() => this.handleDeleteUser(user.id)}>Delete</button>&nbsp;
                                <button className="btn btn-warning" onClick={() => this.handleEditUser(user.id, user.name)}>Edit</button>&nbsp;

                            </div>
                        </div>
                       
                   
                    )}
                     </div>
                    </div>
              
            )
        }
    }

    // *** SHOW SINGLE USER ***

    // handle info user
    handleInfoUser = (id, name, email, address) => {
        console.log('Info for user: ' + id + ' - ' + address)
        this.setState({
            addForm: false,
            editForm: false,
            usersTable: false,
            id: id,
            name: name,
            email: email,
            address: address,
            userInfoModal: true
        })
    }

    // render user info
    renderUserInfo() {
        const { id, name, username, email } = this.state;
        const { suite, street, city, zipcode } = this.state.address;

        const divStyle = {
            width: '100%'
        }
        if (this.state.userInfoModal) {
            return <Modal isOpen={this.state.userInfoModal} >
                <ModalBody>
                    <div className="card" style={divStyle}>
                        <div className="card-header">
                            User: <strong>{id}</strong>
                            <button className="btn btn-danger float-right" onClick={this.closeUserInfo}>X</button>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name: <strong>{name}</strong></li>
                            <li className="list-group-item">Email: <strong>{email}</strong></li>
                            <li className="list-group-item"> Address:
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">- Suite: <strong>{suite}</strong></li>
                                    <li className="list-group-item">- Street: <strong>{street}</strong></li>
                                    <li className="list-group-item">- City: <strong>{city}</strong></li>
                                    <li className="list-group-item">- Zip: <strong>{zipcode}</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </ModalBody>
            </Modal>
        }

    }

    // close edit form
    closeUserInfo = () => {
        this.setState({
            addForm: true,
            editForm: false,
            usersTable: true,
            userInfoModal: false
        })
    }

    // close edit form
    closeAddModal = () => {
        this.setState({
            addForm: true,
            editForm: false,
            usersTable: true,
            userAddModal: false
        })
    }

    // *** ADD USER ***

    // handle add click
    handleAddUser = (e) => { //passes in the event
        e.preventDefault();
        // console.log(e.target.user.value) //extract value from user object from the event
        const newUserName = e.target.name.value;
        const newUserUsername = e.target.username.value;
        const newUserEmail = e.target.email.value;
        const newUserSuite = e.target.suite.value;
        const newUserStreet = e.target.street.value;
        let idNum = Math.floor((Math.random() * 1000) + 9999); // generate random number for id
        if (newUserName !== '') { //do if data is not empty
            this.props.addUser(idNum, newUserName, newUserUsername, newUserEmail, newUserSuite, newUserStreet); // passes arguments into props
            this.setState({
                message: '',
                userAddModal: false
            })
        } else { //do if data is empty
            console.log(newUserName)
            this.setState({
                message: 'Please enter a user.'
            })
        }
        e.target.name.value = ''; //reset input field
        e.target.username.value = ''; //reset input field
        e.target.email.value = ''; //reset input field
        e.target.suite.value = ''; //reset input field
        e.target.street.value = ''; //reset input field
    }

    // render add form
    renderAddForm() {

        const divStyle = {
            width: '100%'
        }

        if (this.state.userAddModal) {
            return <Modal isOpen={this.state.userAddModal} >
                <ModalBody>
                    <div className="card" style={divStyle}>
                        <div className="card-header">
                            {/* User: <strong>{id}</strong> */}
                            <button className="btn btn-danger float-right" onClick={this.closeAddModal}>X</button>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleAddUser}>
                                <div className="form-group">
                                    <label className="" htmlFor="add-name">Name&nbsp;</label>
                                    <input type="text" name="name" className="user" id="add-name" />
                                </div>
                                <div className="form-group">
                                    <label className="" htmlFor="add-username">Username&nbsp;</label>
                                    <input type="text" name="username" className="user" id="add-username" />
                                </div>
                                <div className="form-group">
                                    <label className="" htmlFor="add-email">Email&nbsp;</label>
                                    <input type="text" name="email" className="user" id="add-email" />
                                </div>
                                <div className="form-group">
                                    <label className="" htmlFor="add-suite">Suite&nbsp;</label>
                                    <input type="text" name="suite" className="user" id="add-suite" />
                                </div>
                                <div className="form-group">
                                    <label className="" htmlFor="add-street">Street&nbsp;</label>
                                    <input type="text" name="street" className="user" id="add-street" />
                                </div>
                                <button className="btn btn-primary btn-add-user">Create</button>
                            </form>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        }
    }

    // *** DELETE USER ***

    //handle delete click
    handleDeleteUser = (id) => {
        console.log(id);
        // alert('Are you sure you want to delete user:' + id);
        this.props.deleteUser(id)
        const totalUsers = this.props.users.length - 1
        console.log(totalUsers)
        if (totalUsers === 0) {
            this.setState({
                message: "No users"
            })
        }
        // this.setState({
        //     message: 'No users'
        // })

    }

    // *** EDIT USER ***

    // handle edit click
    handleEditUser = (id, name) => {
        console.log('edit button clicked on user ', id, name);
        this.setState({
            addForm: false,
            editForm: true,
            usersTable: false,
            id: id,
            name: name,
            modal: true
        })

        // this.renderEditForm(id);
    }

    // render edit form
    renderEditForm() {
        // console.log('edit form passed user ', id)
        const divStyle = {
            width: '100%'
        }

        if (this.state.editForm) {
            // const id = this.state.id;
            // console.log(id);
            return <Modal isOpen={this.state.modal} >
                <ModalBody>
                    <div className="card" style={divStyle}>
                        <div className="card-header">
                            Edit User - {this.state.id}
                            <button className="btn btn-danger float-right" onClick={this.closeEditForm}>X</button>
                        </div>

                        <br />
                        <div className="card-body">
                            <form onSubmit={this.handleUpdateUser}>
                                <div class="form-group">
                                    <label className="" htmlFor="edit-user">Name:&nbsp;</label>
                                    <input type="text" name="updatedUser" className="user" id="edit-user" defaultValue={this.state.name} />&nbsp;
                        {/* <input type="text" name="updatedUser" className="user" id="edit-user" /> */}
                                </div>
                                <button className="btn btn-primary">Update</button>
                            </form>
                        </div>

                    </div>
                </ModalBody>
            </Modal>
        }
    }

    // handle edit click
    handleUpdateUser = (e) => {
        e.preventDefault();
        const id = this.state.id;
        console.log(e.target.updatedUser.value, id);
        const updatedUserName = e.target.updatedUser.value;
        if (updatedUserName !== '') {
            this.props.updateUser(id, updatedUserName);
            console.log(updatedUserName)

            this.setState({
                addForm: true,
                editForm: false,
                usersTable: true,
                message: ''
            });
        } else {
            this.setState({
                message: 'Please enter an update.'
            })
        }


    }

    // close edit form
    closeEditForm = () => {
        this.setState({
            addForm: true,
            editForm: false,
            usersTable: true
        })
    }

    // *** RENDER COMPONENT ***

    // render component's main view
    render() {

        console.log(this.props);
        return (
            <div className="container">
                {this.renderAddForm()}
                {this.renderEditForm()}
                {this.renderUserInfo()}
                <div className="content">
                    {
                        // (this.message !== '' || this.users.length === 0) && <p className="message text-danger">{this.message}</p>
                        console.log(this.props.users)}
                    {(this.state.message !== '' || this.props.users.length === 0) && <p className="message text-danger">{this.state.message}</p>
                    }
                    {this.renderUsersTable()}
                </div>
            </div>
        )
    }
}

// *** PROPS ***

// retrieve state from store and map to the component's props
const mapStateToProps = (state) => {
    return {
        users: state.users.users // passes users in initState from usersReducer through to users in rootReducer
    }
}

// dispatch actions to state in store 
const mapDispatchToProps = (dispatch) => {
    return {
        // don't need to do it this way unless not using an actions file eg userActions.js 
        // deleteUser: (id) => { dispatch({
        //     type: 'DELETE_USERS',
        //     id: id
        // })}
        // fetchUsers: () => { dispatch(fetchUsers()) },
        deleteUser: (id) => { dispatch(deleteUser(id)) }, // need only the id (or array index) to Delete the object
        updateUser: (id, name) => { dispatch(updateUser(id, name)) }, // need only the id (or array index) to Edit the object
        addUser: (id, name, username, email, suite, street) => { dispatch(addUser(id, name, username, email, suite, street)) } // need to include all relevant fields to Add a new object
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
