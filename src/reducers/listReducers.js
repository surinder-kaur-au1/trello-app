import { CONSTANTS } from '../actions';
let listID = 2;
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
        id: 0,
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
                    title: action.payload.title,
                    card : [],
                    id: listID
                };
                listID += 1;
                    return [...state, newList];
                
            default: return state;
        }
}

export default listReducers;