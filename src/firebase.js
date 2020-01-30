import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyBEA9ahKRiZ9LnqpyALUTTluhgbhmGvfLU',
    authDomain: "todo-react-3fdce.firebaseapp.com",
    databaseURL: "https://todo-react-3fdce.firebaseio.com",
    projectId: "todo-react-3fdce",
    storageBucket: "todo-react-3fdce.appspot.com",
    messagingSenderId: "932967540978",
    //appId: "1:932967540978:web:bd5a421cd27d94a8efc86b"
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref(); // create the reference to the collection you wanna listen.

export const todosRef = databaseRef.child('todos');


