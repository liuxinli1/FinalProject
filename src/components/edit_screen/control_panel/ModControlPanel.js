import React from 'react';

class ModControlPanel extends React.Component {

    render() {
        return (
            <div className = "col container center-align">Mod Control
                <div className = "input-field">
                    <input className = "validate" id = "ChangeText"/>
                    <label htmlFor = "ChangeText" className = "active">Change Text</label>
                </div>
                <div className = "input-field">
                    <input className = "validate" id = "ChangeFont" type = "number" min = "1" max = "200"/>
                    <label htmlFor = "ChangeFont" className = "active">Change Font</label>
                </div>
                <div className = "input-field">
                    <input className = "validate" id = "ChangeBorder" type = "number" min = "1" max = "200"/>
                    <label htmlFor = "ChangeBorder" className = "active">Change Border</label>
                </div>
                <div>
                    <input type = "color"/>
                </div>
            </div>
        );
    }
}
export default ModControlPanel;