import React from 'react';

class Canvas extends React.Component {

    render() {
        this.canvas = this.props.canvas
        return (
            <div className = "canvas_area">
                {this.canvas.itemName}
            </div>
        );
    }
}
export default Canvas;