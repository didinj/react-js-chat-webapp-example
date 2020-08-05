import firebase from 'firebase';

const config = {
    projectId: 'reactchat-a43b2',
    apiKey: 'AIzaSyBqtuF1-HruRo46GIsla6NyvDPdTB_IbMA',
    databaseURL: 'https://reactchat-a43b2.firebaseio.com'
  };
firebase.initializeApp(config);

export default firebase;