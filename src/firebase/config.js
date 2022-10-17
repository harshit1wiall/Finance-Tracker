// firebase@8.5

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

    const firebaseConfig = {
        apiKey: "AIzaSyASWtTneuJCDwvb09MODZBiCbADIWvU20A",
        authDomain: "mymoney-1-5afed.firebaseapp.com",
        projectId: "mymoney-1-5afed",
        storageBucket: "mymoney-1-5afed.appspot.com",
        messagingSenderId: "531033621457",
        appId: "1:531033621457:web:3e0374c7bbf99cde2316f0"
      };

//initisalize firebase
      firebase.initializeApp(firebaseConfig)


      // service init
      const projectFirestore=firebase.firestore();
      const projectAuth=firebase.auth();


      // timestamp

      const timestamp=firebase.firestore.Timestamp
       
      export{projectFirestore,projectAuth,timestamp}
