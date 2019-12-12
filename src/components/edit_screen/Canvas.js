import React from 'react';

import Panel from './control_panel/control_components/Panel';
import Label from './control_panel/control_components/Label.js';
import Button from './control_panel/control_components/Button.js';
import Textfield from './control_panel/control_components/Textfield.js';

class Canvas extends React.Component {

    render() {
        const canvas = this.props.canvas
        const zoom = this.props.zoom
        let obj = null;
        let height = 0;
        let width = 0;
        if(canvas != undefined)
        {
            obj = canvas.canvas;
            height = canvas.height*zoom;
            width = canvas.width*zoom;
        }
        return (
            <div className = "canvas_area">
                <div style = {{width: width+"px", height: height+"px", borderStyle: "solid" ,borderWidth: "2px", margin: "auto"}}>
                    {(obj&&obj.container) && obj.container.map(control => (
                        <Panel control = {control} zoom = {zoom}/>
                    ))}
                    {(obj&&obj.label) && obj.label.map(control => (
                        <Label control = {control} zoom = {zoom}/>
                    ))}
                    {(obj&&obj.button) && obj.button.map(control => (
                        <Button control = {control} zoom = {zoom}/>
                    ))}
                    {(obj&&obj.textField) && obj.textField.map(control => (
                        <Textfield control = {control} zoom = {zoom}/>
                    ))}
                </div>
            </div>
        );
    }
}
export default Canvas;