import React from 'react';

class Textfield extends React.Component {
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
                    textAlign: "left"
                }}
                    
                    tabIndex="0"
                    onClick = {this.setSelected}
                    onBlur = {this.unSelected}
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
                {this.control.text ? this.control.text : "Textfield"}
            </div>
        );
    }
}
export default Textfield;