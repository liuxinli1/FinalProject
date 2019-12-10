import React from 'react';

class ItemCard extends React.Component {

    render() {
        const { canvas } = this.props;
        console.log("ItemCard, canvasList.id: " + canvas.id);
        return (
            <div className="card z-depth-0 todo-list-link">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{canvas.itemName}</span>
                </div>
            </div>
        );
    }
}
export default ItemCard;