import firebaseApp from './FirebaseUtils_Local';
import firebase from 'firebase/app';

var notificationDB = firebase.database().ref('notifications');

export default FirebaseTest = (user) => {
    notificationDB.child(user.name.first).set({
        status: 'NOTIFICATION_PENDING'
    });
}
