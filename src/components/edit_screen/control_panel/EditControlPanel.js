import React from 'react';

class EditControlPanel extends React.Component {

    render() {
        return (
            <div className = "row container right-align">Edit Control
                {/* <div className = "btn-large waves-effect waves-light blue"><i className = "material-icons">open_with</i></div>
                <div className = "btn-large waves-effect waves-light blue"><i className = "material-icons">zoom_out_map</i></div> */}
                <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">content_copy</i></div>
                <div className = "btn-small waves-effect waves-light blue"><i className = "material-icons">delete</i></div>
            </div>
        );
    }
}
export default EditControlPanel;