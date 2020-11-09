import firebase from 'firebase';

const firebaseConfig = {
apiKey: "AIzaSyDpkLQv7amOv6MkCT_GiRqk9su7L6fimR8",
authDomain: "discord-app-a39ab.firebaseapp.com",
databaseURL: "https://discord-app-a39ab.firebaseio.com",
projectId: "discord-app-a39ab",
storageBucket: "discord-app-a39ab.appspot.com",
messagingSenderId: "864267305187",
appId: "1:864267305187:web:f698facdb5be8908a105d6",
measurementId: "G-GHCKYL6SPL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db ;