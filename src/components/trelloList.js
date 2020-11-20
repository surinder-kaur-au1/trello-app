import { CardTravelSharp } from '@material-ui/icons';
import React, { Component } from 'react';
import TrelloActionButton from './TrelloActionButton';
 import TrelloCard from './TrelloCards';
const styles = {
    container: {
        backgroundColor: '#dfe3ef',
        borderRadius: 2,
        height: '100%',
        width: 200,
        padding: 8,
        marginRight: 8,
        height: '100%'
        
    }
}
const TrelloList = ({ title, cards }) =>{
    return (
        <div style = {styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (<TrelloCard key={card.id} text={card.text} />))}
            < TrelloActionButton/>
        </div>
    );
}

export default TrelloList;