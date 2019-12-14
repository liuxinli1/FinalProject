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
            <div>
                <div style ={(this.control)&&{
                    height: 10*zoom+"px",
                    width: 10*zoom+"px",
                    position: "absolute",
                    left: (this.control.posX-5)*zoom+"px",
                    top: (this.control.posY-5)*zoom+"px",
                    borderRadius: "3px",
                    borderStyle: "solid",
                    display: (this.state.selected? "block":"none"),
                    zIndex: 1,
                }}></div>
                <div style ={(this.control)&&{
                    height: 10*zoom+"px",
                    width: 10*zoom+"px",
                    position: "absolute",
                    left: (this.control.posX+this.control.width-5)*zoom+"px",
                    top: (this.control.posY-5)*zoom+"px",
                    borderRadius: "3px",
                    borderStyle: "solid",
                    display: (this.state.selected? "block":"none"),
                    zIndex: 1,
                }}></div>
                <div style ={(this.control)&&{
                    height: 10*zoom+"px",
                    width: 10*zoom+"px",
                    position: "absolute",
                    left: (this.control.posX+this.control.width-5)*zoom+"px",
                    top: (this.control.posY+this.control.height-5)*zoom+"px",
                    borderRadius: "3px",
                    borderStyle: "solid",
                    display: (this.state.selected? "block":"none"),
                    zIndex: 1,
                }}></div>
                <div style ={(this.control)&&{
                    height: 10*zoom+"px",
                    width: 10*zoom+"px",
                    position: "absolute",
                    left: (this.control.posX-5)*zoom+"px",
                    top: (this.control.posY+this.control.height-5)*zoom+"px",
                    borderRadius: "3px",
                    borderStyle: "solid",
                    display: (this.state.selected? "block":"none"),
                    zIndex: 1,
                }}></div>
            <input type="button" value={this.control ? this.control.text : "Button"}
                style = {(this.control) && {
                    height: this.control.height*zoom+"px", 
                    width: this.control.width*zoom+"px",
                    position: "absolute",
                    fontSize: this.control.font*zoom,
                    left: this.control.posX*zoom+"px",
                    top: this.control.posY*zoom+"px",
                    margin: "0px 0px 0px 0px",
                    borderWidth: this.control.border*zoom+"px",
                    borderRadius: this.control.borderRadius*zoom+"px",
                    borderStyle: "solid",
                    color: this.control.textColor,
                    borderColor: this.control.borderColor,
                    backgroundColor: this.control.bgColor,
                 }}

                    tabIndex="0"
                    onClick = {this.setSelected}
                    onBlur = {this.unSelected}>
            </input>
            </div>
        );
    }
}
export default Button;