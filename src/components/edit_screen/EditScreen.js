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
        redirectTo: '',
        newHeight: 0,
        newWidth: 0,
        newName: '',
        zoom: 1,
        selected: null
    }
    componentDidMount(){
        this.updateState();
    }
    cancelChanges = () =>{
        this.setState({redirectTo: '/'});
    }
    submitChanges = () =>{
        this.canvas.height = this.state.newHeight;
        this.canvas.width = this.state.newWidth;
        this.canvas.itemName = this.state.newName;
        const fireStore = getFirestore();
        fireStore.collection("canvasList").doc(this.canvas.id).update({
            canvas: this.canvas.canvas,
            itemName: this.state.newName,
            width: this.state.newWidth,
            height: this.state.newHeight,
            timestamp: firestore.FieldValue.serverTimestamp()
        });
        // this.setState({redirectTo: '/'});
    }
    changeHeight = (e)=>{
        this.setState({newHeight: e.target.value});
    }
    changeWidth = (e)=>{
        this.setState({newWidth: e.target.value});
    }
    changeName = (e) =>{
        this.setState({newName: e.target.value});
    }
    updateDimension = () =>{
        this.canvas.height = this.state.newHeight;
        this.canvas.width = this.state.newWidth;
        this.forceUpdate();
    }
    zoomIn = () =>{
        this.setState({zoom: this.state.zoom*1.5});
    }
    zoomOut = () =>{
        this.setState({zoom: this.state.zoom/1.5});
    }
    updateState()
    {
        // this.canvas.height = this.props.height;
        // this.canvas.width = this.props.width;
        // this.canvas.itemName = this.props.itemName;
        if(!this.state.newHeight)
            this.setState({newHeight: this.canvas.height});
        if(!this.state.newWidth)
            this.setState({newWidth: this.canvas.width});
        if(!this.state.newName)
            this.setState({newName: this.canvas.itemName});
    }
    refresh = () =>{
        this.forceUpdate();
        // console.log("refreshed");
    }
    setSelected = (obj)=> {
        this.setState({selected: obj});
        this.forceUpdate();
        //console.log(obj);
    }
    render() {
        if(this.state.redirectTo)
            return <Redirect to = {this.state.redirectTo}/>
        this.canvas = {
            itemName: "",
            owner: "",
            canvas: {
                "container": [{
                    "name": "",
                    "font": 0,
                    "border": 1,
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "textColor": "#000000",
					"borderColor": "#000000",
					"bgColor": "#ffffff",
                    "id": 0
                }],
                "label": [{
                    "name": "",
                    "font": 12,
                    "border": 1,
                    "borderRadius": 0,
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "textColor": "#000000",
					"borderColor": "#000000",
					"bgColor": "#ffffff",
                    "id": 0
                }],
                "textField": [{
                    "name": "",
                    "font": 12,
                    "border": 1,
                    "borderRadius": 0,
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "textColor": "#000000",
					"borderColor": "#000000",
					"bgColor": "#ffffff",
                    "id": 0
                }],
                "button": [{
                    "name": "",
                    "font": 12,
                    "border": 1,
                    "borderRadius": 0,
                    "text": "",
                    "width": 0,
                    "height": 0,
                    "posX": 0,
                    "posY": 0,
                    "textColor": "#000000",
					"borderColor": "#000000",
					"bgColor": "#ffffff",
                    "id": 0
                }]
            },
            width: 250,
			height: 250,
        }
        if(this.props.canvas)
        {
            this.canvas = this.props.canvas;
            // this.canvas.height = this.props.canvas.height;
            // this.canvas.width = this.props.canvas.width;
            // this.canvas.name = this.props.canvas.name;
            //this.updateState();
        }
        // console.log(this.canvas.height + " height");
        // console.log(this.canvas.width + "width");
        return (
                <div className = "row">
                    <div className = "col s2 left-align">
                        <div className = "row">
                            <div className = "btn-small waves-effect waves-light blue" onClick = {this.zoomIn}><i className = "material-icons">zoom_in</i></div>
                            <div className = "btn-small waves-effect waves-light blue" onClick = {this.zoomOut}><i className = "material-icons">zoom_out</i></div>
                            <div className = "btn-small waves-effect waves-light blue" onClick = {this.submitChanges}><i className = "material-icons">save</i></div>
                            <div className = "btn-small waves-effect waves-light blue" onClick = {this.cancelChanges}><i className = "material-icons">close</i></div>
                        </div>
                        <div className = "row container">
                            <div className = "input-field">
                                <input className = "validate" id = "widthInput" type = "number" min = "1" max = "5000" defaultValue = {this.canvas.width} onChange = {this.changeWidth}/>
                                <label htmlFor = "widthInput" className = "active">Width</label>
                            </div>
                            <div className = "input-field">
                                <input className = "validate" id = "heightInput"type = "number" min = "1" max = "5000" defaultValue = {this.canvas.height} onChange = {this.changeHeight}/>
                                <label htmlFor = "heightInput" className = "active">Height</label>
                            </div>
                            <div className = "btn-small waves-effect waves-light blue" onClick = {this.updateDimension}>Update Dimension</div>
                        </div>
                        <div className = "row container left-align" onClick = {this.refresh}>
                            <AddControlPanel canvas = {this.canvas}/>
                            <EditControlPanel selected = {this.state.selected}/>
                        </div>
                    </div>
                    <div className = "col s8 center-align">
                        <input className = "center-align" type = "text" defaultValue = {this.canvas.itemName} onChange = {this.changeName}/>
                        <Canvas canvas = {this.canvas} zoom = {this.state.zoom} setSelected = {this.setSelected}/>
                    </div>
                    <div className = "col s2 container">
                        <ModControlPanel selected = {this.state.selected} refresh = {this.refresh}/>
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