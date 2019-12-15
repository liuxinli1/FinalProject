import React from 'react';

class Button extends React.Component {
    state = {
        selected: false,
        isDragging: false,
        isResizing: false,
        oldWidth: 0,
        oldHeight: 0,
        oldPosX:0,
        oldPosY:0,
        newPosX:0,
        newPosY:0,
        originalX:0,
        originalY:0,
        resizeDir:"",
        target: null,
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
        e.stopPropagation();
        // console.log(e.target);
        if(e.target.classList.contains("content"))
            this.setState({isDragging: true});
        if(e.target.classList.contains("drag_button")){
            this.setState({isResizing: true});
            if(e.target.classList.contains("UL"))
                this.setState({resizeDir: "UL"});
            if(e.target.classList.contains("UR"))
                this.setState({resizeDir: "UR"});
            if(e.target.classList.contains("DR"))
                this.setState({resizeDir: "DR"});
            if(e.target.classList.contains("DL"))
                this.setState({resizeDir: "DL"});
            this.setState({isDragging: false});
            this.setState({target: e.target});
        }
        if(this.state.selected)
        {
            e.preventDefault();
            window.addEventListener('mousemove', this.handleMouseMove);
            window.addEventListener('mouseup', this.handleMouseUp);
            // console.log(this.control);
            this.setState({oldPosX: e.screenX, oldPosY: e.screenY, originalX:this.control.posX, originalY: this.control.posY, oldHeight: this.control.height, oldWidth: this.control.width});
        }
    }
    handleMouseMove =(e)=>{
        this.setState({newPosX: e.screenX, newPosY: e.screenY});
        // console.log((this.state.newPosX - this.state.oldPosX));
        // console.log((this.state.newPosY - this.state.oldPosY));
        if(this.state.isDragging){
            this.control.posX = this.state.originalX+(this.state.newPosX - this.state.oldPosX)/this.props.zoom;
            this.control.posY = this.state.originalY+(this.state.newPosY - this.state.oldPosY)/this.props.zoom;
        }
        if(!this.state.isDragging && this.state.isResizing){
            switch(this.state.resizeDir){
                case "UL": {
                    this.control.width = this.state.oldWidth + (this.state.newPosX - this.state.oldPosX)/this.props.zoom;
                    this.control.height = this.state.oldHeight + (this.state.newPosY - this.state.oldPosY)/this.props.zoom;
                }
                    break;
                case "UR": {
                    this.control.width = this.state.oldWidth+(this.state.newPosX - this.state.oldPosX)/this.props.zoom;
                    this.control.height = this.state.oldHeight+(this.state.newPosY - this.state.oldPosY)/this.props.zoom;
                }
                    break;
                case "DR": {
                    this.control.width = this.state.oldWidth+(this.state.newPosX - this.state.oldPosX)/this.props.zoom;
                    this.control.height = this.state.oldHeight+(this.state.newPosY - this.state.oldPosY)/this.props.zoom;
                }
                    break;
                case "DL": {
                    this.control.width = this.state.oldWidth+(this.state.newPosX - this.state.oldPosX)/this.props.zoom;
                    this.control.height = this.state.oldHeight+(this.state.newPosY - this.state.oldPosY)/this.props.zoom;
                }
                    break;
            }
        }
    }
    handleMouseUp =(e)=>{
        this.setState({isDragging: false, isResizing: false});
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        this.control = this.props.control;
        const zoom = this.props.zoom;
        return (
            <div className = "content"
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
                    <div className = "drag_button UL" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: -5*zoom+"px",
                        top: -5*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}
                    onMouseDown = {this.handleMouseDown}
                    draggable={this.state.selected? "true":"false"}
                    ></div>
                    <div className = "drag_button UR" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: (this.control.width-5)*zoom+"px",
                        top: -5*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}
                    onMouseDown = {this.handleMouseDown}
                    draggable={this.state.selected? "true":"false"}
                    ></div>
                    <div className = "drag_button DR" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: (this.control.width-5)*zoom+"px",
                        top: (this.control.height-5)*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}
                    onMouseDown = {this.handleMouseDown}
                    draggable={this.state.selected? "true":"false"}
                    ></div>
                    <div className = "drag_button DL" style ={(this.control)&&{
                        height: 10*zoom+"px",
                        width: 10*zoom+"px",
                        left: -5*zoom+"px",
                        top: (this.control.height-5)*zoom+"px",
                        display: (this.state.selected? "block":"none"),
                    }}
                    onMouseDown = {this.handleMouseDown}
                    draggable={this.state.selected? "true":"false"}
                    ></div>
                {this.control.text ? this.control.text : "Button"}
            </div>
        );
    }
}
export default Button;