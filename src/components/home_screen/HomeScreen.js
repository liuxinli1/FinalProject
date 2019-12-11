import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { firestore } from 'firebase';
import ItemLinks from './ItemLinks.js';

class HomeScreen extends Component {
    state = {
        redirect : false
    }

    handleNewList = (e) =>{
        const fireStore = getFirestore();
        const id = Math.random().toString(36).substr(2, 10) + Math.random().toString(36).substr(2, 10);
        fireStore.collection("canvasList").doc(id).set({
            itemName: "",
            owner: this.props.auth.email,
            canvas: {
                "container": [{
                    "name": "",
                    "color": "",
                    "font": "",
                    "border": "",
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "id": 0
                }],
                "text": [{
                    "name": "",
                    "color": "",
                    "font": "",
                    "border": "",
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "id": 0
                }],
                "textfield": [{
                    "name": "",
                    "color": "",
                    "font": "",
                    "border": "",
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "id": 0
                }],
                "button": [{
                    "name": "",
                    "color": "",
                    "font": "",
                    "border": "",
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "id": 0
                }]
            },
            width: 250,
			height: 250,
            id: id,
        });
        // this.redirectLink = "/todoList/"+id;
        // this.setState({redirect: true});
        //console.log(id)
        //console.log(this.redirectLink);
    }
    render() {
        let email = "";
        if(this.props.auth.email)
            email = this.props.auth.email;
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
                        <ItemLinks email = {email}/>
                    </div>

                    <div className="col s8">
                        <div className="banner">
                            Wireframer<br />
                            Canvas Maker
                        </div>
                        
                        <div className="home_new_list_container">
                                <button className="home_new_list_button" onClick={this.handleNewList}>
                                    Create a New Canvas
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
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'canvasList', orderBy: ['itemName']},
    ]),
)(HomeScreen);