import React from 'react'
import { connect } from 'react-redux';
import canvasJson from './testdata.json';
import { getFirestore } from 'redux-firestore';

class DatabaseTester extends React.Component {

    // NOTE, BY KEEPING THE DATABASE PUBLIC YOU CAN
    // DO THIS ANY TIME YOU LIKE WITHOUT HAVING
    // TO LOG IN
    handleClear = () => {
        const fireStore = getFirestore();
        fireStore.collection('canvasList').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting " + doc.id);
                fireStore.collection('canvasList').doc(doc.id).delete();
            })
        });
    }

    handleReset = () => {
        const fireStore = getFirestore();
        canvasJson.itemList.forEach(canvasListJson => {
            fireStore.collection('canvasList').doc(canvasListJson.id).set({
                    itemName: canvasListJson.itemName,
                    owner: canvasListJson.owner,
                    canvas: canvasListJson.canvas,
                    width: canvasListJson.width,
                    height: canvasListJson.height,
                    id: canvasListJson.id,
                    timestamp: canvasListJson.timestamp
                }).then(() => {
                    console.log("DATABASE RESET");
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClear}>Clear Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
            </div>)
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
}

export default connect(mapStateToProps)(DatabaseTester);