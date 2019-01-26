import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyCR38Q5tMokHzC6xJtosovXoC4_I8gHbKU",
    authDomain: "blog-6963b.firebaseapp.com",
    databaseURL: "https://blog-6963b.firebaseio.com",
    projectId: "blog-6963b",
    storageBucket: "blog-6963b.appspot.com",
    messagingSenderId: "1091573889276"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()