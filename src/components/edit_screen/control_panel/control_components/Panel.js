import React from 'react';

class Panel extends React.Component {

    render() {
        this.control = this.props.control;
        const zoom = this.props.zoom;
        return (
            <div className = "card" 
                style = {(this.control) && {
                    height: this.control.height*zoom+"px", 
                    width: this.control.width*zoom+"px",
                    position: "relative",
                    fontSize: this.control.font*zoom,
                    left: this.control.posX*zoom+"px",
                    top: this.control.posY*zoom+"px",
                    margin: "0px 0px 0px 0px" }}>
                <div className = "card-content black-text">
                    {this.control ? this.control.text : "Panel"}
                </div>
            </div>
        );
    }
}
export default Panel;