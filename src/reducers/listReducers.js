import { CONSTANTS } from '../actions';
let listID = 2;
let cardID = 4;
const initialState = [
    {
        title: "Completed Task",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Trying to create a trello"
            },
            {
                id: 1,
                text: "first create frontend"
            },
            {
                id: 2,
                text: "introduce reducers"
            }
        ] 
    },

    {
        title: "Task TODO",
        id: 1,
        cards: [
            {
                id: 0,
                text: "need to work on design part"
            },
            {
                id: 1,
                text: "need to add drag drop feature"
            },
            {
                id: 2,
                text: "button should be working in order to add and delete stuff."
            }
        ] 
    }
]


const listReducers = (state = initialState, action) => {
        switch(action.type) {
            case CONSTANTS.ADD_LIST:
                const newList = {
                    title: action.payload,
                    cards : [],
                    id: listID
                };
                listID += 1;
                    return [...state, newList];


            case CONSTANTS.ADD_CARD:
                    const newCard = {
                        text: action.payload.text,
                        id: cardID
                    };
                    cardID += 1;

                 const newState =   state.map(list => {
                        if(list.id === action.payload.listID) {
                            return {
                                ...list,
                                cards: [...list.cards, newCard]
                            }
                        } else {
                            return list
                        }
                    });
                    return newState;
            default:
                 return state;
        }
}

export default listReducers;