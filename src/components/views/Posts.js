import React, { Component } from 'react'

// import PostAdd from './PostAdd'

// redux imports
import { connect } from 'react-redux';
import { deletePost, updatePost, addPost } from '../../redux/actions/postActions'

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            addForm: true,
            editForm: false,
            postsTable: true,
            posts: [],
            id: '',
            title: '',
            message: ''
        }


        // this.handleUpdatePost = this.handleUpdatePost.bind(this);
    }

    //handle delete click
    handleDeletePost = (id) => {
        console.log(id);
        this.props.deletePost(id)
        const totalPosts = this.props.posts.length - 1
        console.log(totalPosts)
        if (totalPosts === 0){
            this.setState({
                message: "No posts"
            })
        }
        // this.setState({
        //     message: 'No posts'
        // })
        
    }

    // handle edit click
    handleEditPost = (id, title) => {
        console.log('edit button clicked on post ', id, title);
        this.setState({
            addForm: false,
            editForm: true,
            postsTable: false,
            id: id,
            title: title
        })

        // this.renderEditForm(id);
    }

    // handle edit click
    handleUpdatePost = (e) => {
        e.preventDefault();
        const id = this.state.id;
        console.log(e.target.updatedPost.value, id);
        const updatedPostTitle = e.target.updatedPost.value;
        if (updatedPostTitle !== ''){
            this.props.updatePost(id, updatedPostTitle);
            console.log(updatedPostTitle)

            this.setState({
                addForm: true,
                editForm: false,
                postsTable: true,
                message: ''
            });
        } else {
            this.setState({
                message: 'Please enter an update.'
            })
        }
        

    }

    // handle add click
    handleAddPost = (e) => { //passes in the event
        e.preventDefault();
        // console.log(e.target.post.value) //extract value from post object from the event
        const newPostTitle = e.target.post.value;
        let idNum = Math.floor((Math.random() * 1000) + 9999); // generate random number for id
        if (newPostTitle !== '') { //do if data in list
            this.props.addPost(idNum, e.target.post.value);
            this.setState({
                message: ''
            })
        } else { //do if data not in list
            console.log(newPostTitle)
            this.setState({
                message: 'Please enter a post.'
            })
        }
        e.target.post.value = ''; //reset input field
    }

    // render add form
    renderAddForm() {
        if (this.state.addForm) {
            return <form onSubmit={this.handleAddPost}>
                <div className="form-group">
                    <label className="" htmlFor="add-post">Add Item &nbsp;</label>
                    <input type="text" name="post" className="post" id="add-post" />
                    <button className="btn btn-primary btn-add-post">Add</button>
                </div>
            </form>
        }
    }

    // render edit form
    renderEditForm() {
        // console.log('edit form passed post ', id)

        if (this.state.editForm) {
            // const id = this.state.id;
            // console.log(id);
            return <form onSubmit={this.handleUpdatePost}>
                <label className="" htmlFor="edit-post">Edit Item &nbsp;</label>
                <input type="text" name="updatedPost" className="post" id="edit-post" defaultValue={this.state.title} />
                {/* <input type="text" name="updatedPost" className="post" id="edit-post" /> */}
                <button className="btn btn-primary update-add-post">Update</button>
            </form>
        }
    }

    // render posts table
    renderPostsTable() {
        if (this.state.postsTable) {
            return (
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.posts.map(post =>
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td><button className="btn btn-danger" onClick={() => this.handleDeletePost(post.id)}>Delete</button></td>&nbsp;
                                <td><button className="btn btn-warning" onClick={() => this.handleEditPost(post.id, post.title)}>Edit</button></td>&nbsp;
                            </tr>
                        )}
                    </tbody>
                </table>
            )
        }
    }

    // render component's main view
    render() {
        
        console.log(this.props);
        return (
            <div className="container">
                {this.renderAddForm()}
                {this.renderEditForm()}
                <div className="content">
                {
                    // (this.message !== '' || this.posts.length === 0) && <p className="message text-danger">{this.message}</p>
                    console.log(this.props.posts)}
                    {(this.state.message !== '' || this.props.posts.length === 0) && <p className="message text-danger">{this.state.message}</p>
                }
                {this.renderPostsTable()}
                </div>
            </div>
        )
    }
}

// retrieve state from store and map to the component's props
const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts // passes posts in initState from postsReducer through to posts in rootReducer
    }
}

// dispatch actions to state in store 
const mapDispatchToProps = (dispatch) => {
    return {
        // don't need to do it this way unless not using an actions file eg postActions.js 
        // deletePost: (id) => { dispatch({
        //     type: 'DELETE_POST',
        //     id: id
        // })}
        deletePost: (id) => { dispatch(deletePost(id)) }, // need only the id (or array index) to Delete the object
        updatePost: (id, title) => { dispatch(updatePost(id, title)) }, // need only the id (or array index) to Edit the object
        addPost: (id, title) => { dispatch(addPost(id, title)) } // need to include all relevant fields to Add a new object
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
