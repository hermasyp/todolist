import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDG4YOB7ZFKXPDI8Qn9mIzR76z9NjkB1II",
    authDomain: "hermas-todolist.firebaseapp.com",
    databaseURL: "https://hermas-todolist.firebaseio.com",
    projectId: "hermas-todolist",
    storageBucket: "hermas-todolist.appspot.com",
    messagingSenderId: "341773559823"
};
firebase.initializeApp(config);
const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child('tasks');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;