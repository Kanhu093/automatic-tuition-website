const firebaseConfig = {
  apiKey: "AIzaSyC9bpCy-PCuzJwRJNCI7kGXrjZkr3lbJzs",
  authDomain: "kanhu-tuition.firebaseapp.com",
  projectId: "kanhu-tuition",
  storageBucket: "kanhu-tuition.firebasestorage.app",
  messagingSenderId: "342863992963",
  appId: "1:342863992963:web:a28b60dd2191f0d43123b6",
  measurementId: "G-7C46JHY15K"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
