import React from 'react';

class Button extends React.Component {
    state = {
        selected: false
    }
    setSelected =()=>{
        this.setState({selected: true});
        this.props.selectObj(this.control);
        console.log("Selected");
    }
    unSelected =()=>{
        this.setState({selected: false});
        this.props.selectObj(null);
        console.log("unSelected");
    }

    render() {
        this.control = this.props.control;
        const zoom = this.props.zoom;
        return (
            <div className = "btn disabled" 
                style = {(this.control) && {
                    height: this.control.height*zoom+"px", 
                    width: this.control.width*zoom+"px",
                    position: "absolute",
                    fontSize: this.control.font*zoom,
                    left: this.control.posX*zoom+"px",
                    top: this.control.posY*zoom+"px",
                    margin: "0px 0px 0px 0px",
                    borderWidth: "1px",
                    borderStyle: (this.state.selected? "solid" : "none"), }}

                    tabindex="0"
                    onClick = {this.setSelected}
                    onBlur = {this.unSelected}>
                {this.control ? this.control.text : "Button"}
            </div>
        );
    }
}
export default Button;