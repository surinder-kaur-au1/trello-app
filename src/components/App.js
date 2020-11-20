import React, { Component } from 'react';
import TrelloList from './trelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
class App extends Component {
    render() {

        const { lists } = this.props;
        return(
            <div>
                    <h2><i>Trello.com</i></h2>
                    <div style={styles.listContainer}>
                {lists.map(list=>(<TrelloList  key={list.id} title={list.title} cards={list.cards}/>))}
                <TrelloActionButton list/>
            </div></div>
            
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
