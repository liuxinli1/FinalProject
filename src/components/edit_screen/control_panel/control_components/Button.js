import React from 'react';

class Button extends React.Component {
    state = {
        selected: false,
        isDragging: false,
        oldPosX:0,
        oldPosY:0,
        newPosX:0,
        newPosY:0,
        originalX:0,
        originalY:0,
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
    handleMouseDown=(e)=>{
        if(this.state.selected)
        {
            e.preventDefault();
            window.addEventListener('mousemove', this.handleMouseMove);
            window.addEventListener('mouseup', this.handleMouseUp);
            this.setState({oldPosX: e.screenX, oldPosY: e.screenY, isDragging: true, originalX:this.control.posX, originalY: this.control.posY});
        }
    }
    handleMouseMove =(e)=>{
        this.setState({newPosX: e.screenX, newPosY: e.screenY});
        console.log((this.state.newPosX - this.state.oldPosX));
        console.log((this.state.newPosY - this.state.oldPosY));
        this.control.posX = this.state.originalX+(this.state.newPosX - this.state.oldPosX);
        this.control.posY = this.state.originalY+(this.state.newPosY - this.state.oldPosY);
    }
    handleMouseUp =(e)=>{
        console.log("MouseUp");
        this.setState({isDragging: false});
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
        this.setState({oldPosX:0, newPosY:0});
    }

    render() {
        this.control = this.props.control;
        const zoom = this.props.zoom;
        return (
            <div 
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
                    onBlur = {this.unSelected}
                    onMouseDown = {this.handleMouseDown}
                    draggable={this.state.selected? "true":"false"}
                    >
                    <div className = "drag_button" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: -5*zoom+"px",
                        top: -5*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}></div>
                    <div className = "drag_button" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: (this.control.width-5)*zoom+"px",
                        top: -5*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}></div>
                    <div className = "drag_button" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: (this.control.width-5)*zoom+"px",
                        top: (this.control.height-5)*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}></div>
                    <div className = "drag_button" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: -5*zoom+"px",
                        top: (this.control.height-5)*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}></div>
                {this.control.text ? this.control.text : "Button"}
            </div>
        );
    }
}
export default Button;