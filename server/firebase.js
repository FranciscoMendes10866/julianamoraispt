import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyAKZfNe6FZHUBlJmtscQE6EbSj9Xx9FK3E',
    authDomain: 'julianamoraiswebapp.firebaseapp.com',
    databaseURL: 'https://julianamoraiswebapp.firebaseio.com',
    projectId: 'julianamoraiswebapp',
    storageBucket: 'julianamoraiswebapp.appspot.com',
    messagingSenderId: '418768078635',
    appId: '1:418768078635:web:f833943fbbe53481a0676e',
    measurementId: 'G-3WBPJVHNJJ'
}

!firebase.apps.length ? firebase.initializeApp(config) : '';

export const auth = firebase.auth();
export const db = firebase.firestore();