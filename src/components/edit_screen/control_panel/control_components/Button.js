import React from 'react';

class Button extends React.Component {
    state = {
        selected: false
    }
    setSelected =()=>{
        this.setState({selected: true});
        this.props.selectObj(this.control);
        // console.log("Selected");
    }
    unSelected =()=>{
        this.setState({selected: false});
        // console.log("unSelected");
    }

    render() {
        this.control = this.props.control;
        const zoom = this.props.zoom;
        return (
            <input type="button" value={this.control ? this.control.text : "Button"}
                style = {(this.control) && {
                    height: this.control.height*zoom+"px", 
                    width: this.control.width*zoom+"px",
                    position: "absolute",
                    fontSize: this.control.font*zoom,
                    left: this.control.posX*zoom+"px",
                    top: this.control.posY*zoom+"px",
                    margin: "0px 0px 0px 0px",
                    borderWidth: this.control.border+"px",
                    borderRadius: this.control.borderRadius+"px",
                    borderStyle: (this.state.selected? "dashed" : "solid"),
                    color: this.control.textColor,
                    borderColor: this.control.borderColor,
                    backgroundColor: this.control.bgColor,
                 }}

                    tabIndex="0"
                    onClick = {this.setSelected}
                    onBlur = {this.unSelected}>
            </input>
        );
    }
}
export default Button;