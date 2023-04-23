import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYg8LFrZhxRn5XR2IxXqppL0bz0gyNZB4",
  authDomain: "appsomativa.firebaseapp.com",
  projectId: "appsomativa",
  storageBucket: "appsomativa.appspot.com",
  messagingSenderId: "467436342412",
  appId: "1:467436342412:web:09a886d70ccca90bd17fa9"
};


//Manter sempre assim para garantir que será inicializado apenas uma vez
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;