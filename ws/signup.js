import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAA8dvIvVDvqfop_jL08O9oY6m89y45Wyw",
  authDomain: "makebot-accounts.firebaseapp.com",
  projectId: "makebot-accounts"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = require("firebase");
require("firebase/firestore");
var db = firebase.firestore();
