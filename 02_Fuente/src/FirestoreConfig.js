import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    //credenciales para la base de datos
    apiKey: "AIzaSyC3GUyJM8in9uK14qAUIiYwPd8nLa2asrU",
    authDomain: "smilecoreact.firebaseapp.com",
    projectId: "smilecoreact",
});
let db=firebase.firestore();
db.settings({timestampsInSnapshots:true});
export default db;