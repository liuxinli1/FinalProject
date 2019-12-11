import React from 'react';

class ModControlPanel extends React.Component {

    render() {
        return (
            <div className = "row">Mod Control
                <div className = "row">Change Text</div>
                <div className = "row">Change Font</div>
                <div className = "row">Change Color</div>
                <div className = "row">Change Border</div>
            </div>
        );
    }
}
export default ModControlPanel;