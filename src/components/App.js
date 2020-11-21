import React, { Component } from 'react';
import TrelloList from './trelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
class App extends Component {

    onDragEnd = () => {

    }
    render() {

        const { lists } = this.props;
        return(
            <DragDropContext onDragEnd= {this.onDragEnd}>
            <div>
                    <h2><i>Trello.com</i></h2>
                    <div style={styles.listContainer}>
                {lists.map(list=>(<TrelloList
                listID = {list.id}
                 key={list.id}
                 title={list.title}
                 cards={list.cards}/>))}
                <TrelloActionButton list/>
            </div>
            </div>
            </DragDropContext>
        )
    }
}
const styles= {
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 8
    }
};
const mapStateToProps= (state) => {
    return ({
        lists: state.lists
    });
}

    export default connect (mapStateToProps) (App);
