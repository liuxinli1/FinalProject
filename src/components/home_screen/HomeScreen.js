import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { firestore } from 'firebase';

class HomeScreen extends Component {
    state = {
        redirect : false
    }

    handleNewList = (e) =>{
        const fireStore = getFirestore();
        const id = Math.random().toString(36).substr(2, 10) + Math.random().toString(36).substr(2, 10);
        fireStore.collection("todoLists").doc(id).set({
            key: id,
            item: [],
            name: null,
            owner: null
        });
        // this.redirectLink = "/todoList/"+id;
        // this.setState({redirect: true});
        //console.log(id)
        //console.log(this.redirectLink);
    }
    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }
        if(this.state.redirect)
        {
            //console.log("redirecting");
            // return <Redirect to={this.redirectLink}/>;
        }
        else
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m4">
                        {/* <TodoListLinks /> */}
                    </div>

                    <div className="col s8">
                        <div className="banner">
                            wireframer<br />
                            List Maker
                        </div>
                        
                        <div className="home_new_list_container">
                                <button className="home_new_list_button" onClick={this.handleNewList}>
                                    Create a New To Do List
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'todoLists', orderBy: ['name']},
    ]),
)(HomeScreen);