import React, { Component } from 'react'

// redux imports
import { connect } from 'react-redux';
import { fetchApiPosts } from '../../redux/actions/apiPostsActions'

class ApiPosts extends Component {

    componentDidMount(){
        this.props.fetchApiPosts();
    }

    render() {
        console.log(this.props.apiposts); // grabs users from mapStateToProps
        return (
            <div className="container">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.apiposts.map(apipost =>
                            <tr key={apipost.id}>
                                <td>{apipost.id}</td>
                                <td>{apipost.title}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

// retrieve state from store and map to the component's props
const mapStateToProps = state => ({
    apiposts: state.apiposts.apiposts // passes apiposts in initState from apiPostsReducer through to apiposts in rootReducer
  
})

export default connect(mapStateToProps, { fetchApiPosts })(ApiPosts);
