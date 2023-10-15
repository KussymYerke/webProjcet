import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import NavbarReducer from "./navbar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It is my first post", likesCount: 23}
            ],
            newPostText: 'Man Chest are united',
        },
        dialogsPage: {
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
        },
        navBar: {
            friendData: [
                {id: 1, name: 'Dimych', src: 'https://www.w3schools.com/howto/img_avatar2.png'},
                {id: 2, name: 'Musya', src: 'https://www.w3schools.com/w3images/avatar2.png'},
                {id: 3, name: 'Adeke', src: 'https://www.w3schools.com/howto/img_avatar.png'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('yo mama')
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = NavbarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);

    }

}

export default store;
