import React from 'react';
import { getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard.js';

class ItemLinks extends React.Component {
    deleteList(canvasList, canvas){
        canvasList = canvasList.filter(element => element !== canvas);
        const fireStore = getFirestore();
        console.log(canvasList);
        console.log(canvas);
        fireStore.collection('canvasList').doc(canvas.id).delete();
    }

    render() {
        let canvasList = this.props.canvasList;
        const email = this.props.email;
        console.log(canvasList);
        return (
            <div className="todo-lists section">
                {canvasList && canvasList.filter(canvas => canvas.owner == email).map(canvas => (
                    <div className = "row valign-wrapper">
                        <div className = "col s10">
                            <Link to={'/item/' + canvas.id} key={canvas.id}>
                                <ItemCard canvas={canvas} />
                            </Link>
                        </div>
                        <div className = "col s2 ">
                            <div className = "btn-floating waves-effect waves-light blue" onClick = {this.deleteList.bind(this, canvasList, canvas)}><i className = "material-icons">delete</i></div>
                        </div>
                    </div>
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