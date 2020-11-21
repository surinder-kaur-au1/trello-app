import { CardTravelSharp } from '@material-ui/icons';
import React, { Component } from 'react';
import TrelloActionButton from './TrelloActionButton';
 import TrelloCard from './TrelloCards';
 import { Droppable } from 'react-beautiful-dnd';
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
const TrelloList = ({ title, cards, listID }) =>{
    return (
        <Droppable droppableId= {String(listID)}>
            {provided => {
        <div {...provided.droppableProps} ref={provided.innerRef} style = {styles.container}>
            <h4>{title}</h4>
            {cards.map((card, index) => {
                return (
                    <TrelloCard
                        key={card.id}
                        index={index}
                        text={card.text}
                        id={card.id} />
                );
            })}
            < TrelloActionButton listID = {listID} />
            {provided.placeholder}
        </div>
            }}
        </Droppable>
    );
}

export default TrelloList;