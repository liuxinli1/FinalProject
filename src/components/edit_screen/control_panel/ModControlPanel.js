import React from 'react';

class ModControlPanel extends React.Component {
    changeText =(e)=>{
        if(this.props.selected){
            let newValue = this.props.selected;
            newValue.text = e.target.value;
            this.props.refresh();
        }
    }
    changeFont =(e)=>{
        if(this.props.selected){
            let newValue = this.props.selected;
            newValue.font = e.target.value;
            this.props.refresh();
        }
    }
    changeBorder =(e)=>{
        if(this.props.selected){
            let newValue = this.props.selected;
            newValue.border = e.target.value;
            this.props.refresh();
        }
    }
    changeBorderRadius =(e)=>{
        if(this.props.selected){
            let newValue = this.props.selected;
            newValue.borderRadius = e.target.value;
            this.props.refresh();
        }
    }
    changeTextColor =(e)=>{
        if(this.props.selected){
            let newValue = this.props.selected;
            newValue.textColor = e.target.value;
            this.props.refresh();
        }
    }
    changeBorderColor =(e)=>{
        if(this.props.selected){
            let newValue = this.props.selected;
            newValue.borderColor = e.target.value;
            this.props.refresh();
        }
    }
    changeBGColor =(e)=>{
        if(this.props.selected){
            let newValue = this.props.selected;
            newValue.bgColor = e.target.value;
            this.props.refresh();
        }
    }

    render() {
        const selected = this.props.selected;
        // console.log(selected? selected.bgColor: "undefined");
        return (
            <div className = "col container center-align">Mod Control
                <div className = "input-field">
                    <input className = "validate" id = "ChangeText" value = {selected? selected.text: ""} onChange = {this.changeText}/>
                    <label htmlFor = "ChangeText" className = "active">Change Text</label>
                </div>
                <div className = "input-field">
                    <input className = "validate" id = "ChangeFont" type = "number" min = "1" max = "200" value = {selected? selected.font: 0} onChange = {this.changeFont}/>
                    <label htmlFor = "ChangeFont" className = "active">Change Font</label>
                </div>
                <div>
                    {/* <input className = "validate" id = "ChangeBorder" type = "number" min = "1" max = "200" defaultValue = {selected? selected.border: null}/>
                    <label htmlFor = "ChangeBorder" className = "active">Change Border</label> */}
                    Border Thickness:{selected? selected.border: 0}<br/>
                    <input type = "range" min = "0" max = "200" value = {selected? selected.border: 0} onChange = {this.changeBorder}/><br/>
                    Border Radius:{selected? selected.borderRaius: 0}<br/>
                    <input type = "range" min = "0" max = "200" value = {selected? selected.borderRaius: 0} onChange = {this.changeBorderRadius}/><br/>
                </div>
                <div style = {{fontSize: "10pt"}}>
                    Text Color:<br/><input type = "color" value = {selected? selected.textColor: "#000000"} onChange = {this.changeTextColor}/><br/>
                    Border Color:<br/><input type = "color" value = {selected? selected.borderColor: "#000000"} onChange = {this.changeBorderColor}/><br/>
                    Background Color:<br/><input type = "color" value = {selected? selected.bgColor: "#ffffff"} onChange = {this.changeBGColor}/><br/>
                </div>
            </div>
        );
    }
}
export default ModControlPanel;