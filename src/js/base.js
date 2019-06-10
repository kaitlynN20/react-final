import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNYWmCzxZpq5rfMrRQbQzHyM9dw8cZPoo",
    authDomain: "reactfinal-3f03d.firebaseapp.com",
    databaseURL: "https://reactfinal-3f03d.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;