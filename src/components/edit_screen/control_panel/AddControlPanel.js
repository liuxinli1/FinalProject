import React from 'react';

import Panel from './control_components/Panel.js';
import Label from './control_components/Label.js';
import Button from './control_components/Button.js';
import Textfield from './control_components/Textfield.js';
import Generic from './control_components/Generic.js';

class AddControlPanel extends React.Component {
    addPanel =()=>{
        let newPanel = {
            "name": "",
            "color": "",
            "font": "",
            "border": 1,
			"borderRadius": 0,
            "text": "",
            "width": 100,
            "height": 50,
            "posX": 0,
            "posY": 0,
            "textColor": "#000000",
			"borderColor": "#000000",
			"bgColor": "#ffffff",
            "id": this.obj.container[this.obj.container.length-1] ? this.obj.container[this.obj.container.length-1].id+1 : 0
        };
        this.obj.container.push(newPanel);
        this.forceUpdate();
        console.log("Clicked");
        console.log(this.obj);
    }
    addLabel =()=>{
        let newLabel = {
            "name": "",
            "color": "",
            "font": "12",
            "border": 1,
			"borderRadius": 0,
            "text": "label",
            "width": 100,
            "height": 50,
            "posX": 0,
            "posY": 0,
            "textColor": "#000000",
			"borderColor": "#000000",
			"bgColor": "#ffffff",
            "id": this.obj.label[this.obj.label.length-1] ? this.obj.label[this.obj.label.length-1].id+1 : 0
        }
        this.obj.label.push(newLabel);
        this.forceUpdate();
    }
    addButton =()=>{
        let newButton = {
            "name": "",
            "color": "",
            "font": "",
            "border": 1,
			"borderRadius": 0,
            "text": "Button",
            "width": 100,
            "height": 50,
            "posX": 0,
            "posY": 0,
            "textColor": "#000000",
			"borderColor": "#000000",
			"bgColor": "#ffffff",
            "id": this.obj.button[this.obj.button.length-1] ? this.obj.button[this.obj.button.length-1].id+1 : 0
        }
        this.obj.button.push(newButton);
        this.forceUpdate();
    }
    addTextField =()=>{
        let newTextField = {
            "name": "",
            "color": "",
            "font": "",
            "border": 1,
			"borderRadius": 0,
            "text": "TextField",
            "width": 100,
            "height": 50,
            "posX": 0,
            "posY": 0,
            "textColor": "#000000",
			"borderColor": "#000000",
			"bgColor": "#ffffff",
            "id": this.obj.textField[this.obj.textField.length-1] ? this.obj.textField[this.obj.textField.length-1].id+1 : 0
        }
        this.obj.textField.push(newTextField);
        this.forceUpdate();
    }

    render() {
        const canvas = this.props.canvas;
        this.obj = null;
        if(canvas)
            this.obj = canvas.canvas;
        return (
            <div className = "row center-align">Add Control
                <div className = "row" onClick = {this.addPanel}><Generic text = {"Panel"}/></div>
                <div className = "row" onClick = {this.addLabel}><Generic text = {"Label"}/></div>
                <div className = "row" onClick = {this.addButton}><Generic text = {"Button"}/></div>
                <div className = "row" onClick = {this.addTextField}><Generic text = {"TextField"}/></div>
            </div>
        );
    }
}
export default AddControlPanel;