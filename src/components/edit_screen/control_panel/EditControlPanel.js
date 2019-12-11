import React from 'react';

class EditControlPanel extends React.Component {

    render() {
        return (
            <div className = "row">Edit Control
                <div className = "row">Reposition</div>
                <div className = "row">Resize</div>
                <div className = "row">Duplicate</div>
                <div className = "row">Delete</div>
            </div>
        );
    }
}
export default EditControlPanel;