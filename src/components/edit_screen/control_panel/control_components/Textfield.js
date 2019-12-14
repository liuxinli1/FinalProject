import React from 'react';

class Textfield extends React.Component {

    render() {
        this.control = this.props.control;
        const zoom = this.props.zoom;
        return (
            <input type = "text" disabled value = {this.control ? this.control.text : "TextField"}
                style = {(this.control) && {
                    height: this.control.height*zoom+"px", 
                    width: this.control.width*zoom+"px",
                    position: "absolute",
                    fontSize: this.control.font*zoom,
                    left: this.control.posX*zoom+"px",
                    top: this.control.posY*zoom+"px",
                    margin: "0px 0px 0px 0px" }}>
            </input>
        );
    }
}
export default Textfield;