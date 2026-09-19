// firebase-config.js
//
// 1. Go to https://console.firebase.google.com, create a free project.
// 2. In Project settings > General, scroll to "Your apps" and add a Web app.
// 3. Copy the config object Firebase shows you and paste the values below.
// 4. In the left sidebar, enable:
//      - Build > Authentication > Sign-in method > Anonymous  (turn ON)
//      - Build > Authentication > Sign-in method > Email/Password (turn ON, for the facilitator only)
//      - Build > Firestore Database > Create database (start in "production mode")
// 5. Create ONE facilitator account: Authentication > Users > Add user
//    (any email + password you choose — this is the admin login for admin.html).
//    Copy that user's UID and paste it into firestore.rules where indicated,
//    then publish the rules (see firestore.rules for instructions).

export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID",
};
