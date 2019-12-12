import React from 'react';

import Panel from './control_components/Panel.js';
import Label from './control_components/Label.js';
import Button from './control_components/Button.js';
import Textfield from './control_components/Textfield.js';

class AddControlPanel extends React.Component {

    render() {
        return (
            <div className = "row center-align">Add Control
                <div className = "row"><Panel/></div>
                <div className = "row"><Label/></div>
                <div className = "row"><Button/></div>
                <div className = "row"><Textfield/></div>
            </div>
        );
    }
}
export default AddControlPanel;