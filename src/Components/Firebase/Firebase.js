import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDBnUArHuZaZ7VeiSMbciLtwFDqJYXJH_4",
  authDomain: "shop-router.firebaseapp.com",
  databaseURL: "https://shop-router.firebaseio.com",
  projectId: "shop-router",
  storageBucket: "shop-router.appspot.com",
  messagingSenderId: "191954390831"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('Users').set({
    name: 'lloyd'
});
database.ref('Users/Lloyd').set({
    name: 'lloyd',
    age: 25
});
