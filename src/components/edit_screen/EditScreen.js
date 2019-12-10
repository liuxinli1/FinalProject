import React, { Component } from 'react';
import { getFirestore } from 'redux-firestore';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Canvas from './Canvas.js';

export class EditScreen extends Component {
    state = {
        redirectTo: ''
    }
    cancelChanges(){
        this.setState({redirectTo: '/'});
    }
    submitChanges(){
        // const itemDB = getFirestore().collection("canvasList").doc(this.props.listID).update({
        //     canvas: this.props.canvas
        // })
        this.setState({redirectTo: '/'});
    }
    render() {
        if(this.state.redirectTo)
            return <Redirect to = {this.state.redirectTo}/>
        return (
            <div classNamr = "col">
                <div className = "row">
                    <div className = "col">Resize Canvas</div>
                    <div className = "col">Zoom In</div>
                    <div className = "col">Zoom Out</div>
                    <div className = "col">Save</div>
                    <div className = "col">Close</div>
                </div>
                <div className = "row">
                    <div className = "col s3 center-align">Add Control
                        <div className = "row">Container</div>
                        <div className = "row">Label</div>
                        <div className = "row">Button</div>
                        <div className = "row">TextField</div>
                    </div>
                    <div className = "col s6 center-align">Canvas
                        <Canvas/>
                    </div>
                    <div className = "col s3 center-align">
                        <div className = "row">Edit Control
                            <div className = "row">Reposition</div>
                            <div className = "row">Resize</div>
                            <div className = "row">Duplicate</div>
                            <div className = "row">Delete</div>
                        </div>
                        <div className = "row">Mod Control
                            <div className = "row">Change Text</div>
                            <div className = "row">Change Font</div>
                            <div className = "row">Change Color</div>
                            <div className = "row">Change Border</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'canvasList' },
    ]),
)(EditScreen)