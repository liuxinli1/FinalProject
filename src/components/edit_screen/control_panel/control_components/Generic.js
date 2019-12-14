import React from 'react';

class Generic extends React.Component {

    render() {
        const text = this.props.text;
        return (
            <div className = "btn waves-effect waves-light blue" style = {{width: "140px", textTransform: "none"}}>
                Add {text}
            </div>
        );
    }
}
export default Generic;