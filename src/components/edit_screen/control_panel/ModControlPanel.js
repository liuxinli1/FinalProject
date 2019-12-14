import React from 'react';

class ModControlPanel extends React.Component {

    render() {
        const selected = this.props.selected
        return (
            <div className = "col container center-align">Mod Control
                <div className = "input-field">
                    <input className = "validate" id = "ChangeText" defaultValue = {selected? selected.text: null}/>
                    <label htmlFor = "ChangeText" className = "active">Change Text</label>
                </div>
                <div className = "input-field">
                    <input className = "validate" id = "ChangeFont" type = "number" min = "1" max = "200" defaultValue = {selected? selected.font: null}/>
                    <label htmlFor = "ChangeFont" className = "active">Change Font</label>
                </div>
                <div className = "input-field">
                    <input className = "validate" id = "ChangeBorder" type = "number" min = "1" max = "200" defaultValue = {selected? selected.border: null}/>
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