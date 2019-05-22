import React, { Component } from 'react'

// redux imports
import { connect } from 'react-redux'

class Users extends Component {
    render() {
        console.log(this.props); // grabs users from mapStateToProps
        return (
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user =>
                          <tr key={user.id}>
                               <td>{user.id}</td>
                               <td>{user.username}</td> 
                          </tr>  
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

// retrieve state from store and map to the component's props
const mapStateToProps = (state) => {
    return {
        users: state.users.users // passes users in initState from usersReducer through to users in rootReducer
    }
}

export default connect(mapStateToProps)(Users)