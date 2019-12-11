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
import { firestore } from 'firebase';

export class EditScreen extends Component {
    state = {
        redirectTo: ''
    }
    cancelChanges = () =>{
        this.setState({redirectTo: '/'});
    }
    submitChanges = () =>{
        // const itemDB = getFirestore().collection("canvasList").doc(this.props.listID).update({
        //     canvas: this.props.canvas
        // })
        this.setState({redirectTo: '/'});
    }
    render() {
        if(this.state.redirectTo)
            return <Redirect to = {this.state.redirectTo}/>
        let canvas = {
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
        }
        if(this.props.canvas != undefined)
            canvas = this.props.canvas;
        return (
                <div className = "row">
                    <div className = "col s2 left-align">
                        <div className = "row">
                            <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">zoom_in</i></div>
                            <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">zoom_out</i></div>
                            <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">save</i></div>
                            <div className = "btn-small waves-effect waves-light blue" onClick = {this.cancelChanges}><i className = "material-icons">close</i></div>
                        </div>
                        <div className = "row container">
                            <div className = "input-field">
                                <input className = "validate" id = "widthInput" type = "number" min = "1" max = "5000" defaultValue = {canvas.width}/>
                                <label htmlFor = "widthInput" className = "active">Width</label>
                            </div>
                            <div className = "input-field">
                                <input className = "validate" id = "heightInput"type = "number" min = "1" max = "5000" defaultValue = {canvas.height}/>
                                <label htmlFor = "heightInput" className = "active">Height</label>
                            </div>
                            <div className = "btn-small waves-effect waves-light blue">Update Dimension</div>
                        </div>
                        <div className = "row container left-align">
                            <AddControlPanel/>
                        </div>
                    </div>
                    <div className = "col s8 center-align">
                        <input className = "center-align" type = "text" defaultValue = {canvas.itemName}/>
                        <Canvas canvas = {canvas}/>
                    </div>
                    <div className = "col s2 container">
                        <EditControlPanel/>
                        <ModControlPanel/>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const {canvasList} = state.firestore.data;
    const canvas = canvasList ? canvasList[id] : null;
    return {
        canvas
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'canvasList' },
    ]),
)(EditScreen)