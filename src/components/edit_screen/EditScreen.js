import React, { Component } from 'react';
import { getFirestore } from 'redux-firestore';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Canvas from './Canvas.js';
import AddControlPanel from './control_panel/AddControlPanel.js';
import EditControlPanel from './control_panel/EditControlPanel.js';
import ModControlPanel from './control_panel/ModControlPanel.js';

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
                <div className = "row">
                    <div className = "col s2 left-align">
                        <div className = "row">
                            <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">zoom_in</i></div>
                            <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">zoom_out</i></div>
                            <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">save</i></div>
                            <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">close</i></div>
                        </div>
                        <div className = "row container">
                            <div className = "input-field">
                                <input className = "validate" id = "widthInput" type = "number" min = "1" max = "5000"/>
                                <label for = "widthInput">Width</label>
                            </div>
                            <div className = "input-field">
                                <input className = "validate" id = "heightInput"type = "number" min = "1" max = "5000"/>
                                <label for = "heightInput">Height</label>
                            </div>
                            <div className = "btn-small waves-effect waves-light blue">Update Dimension</div>
                        </div>
                        <div className = "row container left-align">
                            <AddControlPanel/>
                        </div>
                    </div>
                    <div className = "col s8 center-align">Canvas
                        <Canvas/>
                    </div>
                    <div className = "col s2 center-align">
                        <EditControlPanel/>
                        <ModControlPanel/>
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