const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messagesData: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Hi!"},
        {id: 3, message: "What's up!"}
    ],
    dialogsData: [
        {id: 1, name: "Myrza"},
        {id: 2, name: "Musya"},
        {id: 3, name: "Daulet"}
    ],
    newMessageBody: 'Write a message'
};

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, newMessage]
            };
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
});

export  default DialogsReducer
