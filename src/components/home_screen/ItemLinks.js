import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard.js';

class ItemLinks extends React.Component {
    render() {
        const canvasList = this.props.canvasList;
        const email = this.props.email;
        console.log(canvasList);
        return (
            <div className="todo-lists section">
                {canvasList && canvasList.filter(canvas => canvas.owner == email).map(canvas => (
                    <Link to={'/item/' + canvas.id} key={canvas.id}>
                        <ItemCard canvas={canvas} />
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        canvasList: state.firestore.ordered.canvasList,
        auth: state.firebase.auth,
    };
};

export default compose(connect(mapStateToProps))(ItemLinks);