import { auth, db } from "services/firebaseConfig";
import firebase from "firebase";

const userAPI = {
  signInWithEmail: (email, password) => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          const user = res.user;
          if (user.emailVerified) {
            user.getIdToken().then((value) => {
              resolve({
                uid: user.uid,
                token: value,
              });
            });
          } else {
            reject({
              type: "error",
              message: "Email is not verified.",
            });
          }
        })
        .catch(function (error) {
          if (error.code === "auth/user-not-found") {
            reject({
              type: "error",
              message: "Email or password is incorrect",
            });
          } else reject(error);
        });
    });
  },

  signUpWithEmail: (email, password) => {
    return new Promise((resolve, reject) => {
      const unsubribe = auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          const user = res.user;
          user.sendEmailVerification();
          resolve({
            isSuccess: true,
          });
        })
        .catch((error) => {
          reject(error);
          unsubribe();
        });
    });
  },

  signInWithGoogle: () => {
    return new Promise((resolve, reject) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          resolve({
            uid: user.uid,
            token: token,
          });
          console.log(user);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorMessage = error.message;
          // The email of the user's account used.
          reject({
            type: "error",
            message: errorMessage,
          });
        });
    });
  },

  signInWithFacebook: () => {
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      auth
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user.photoURL);
          resolve({
            uid: user.uid,
            token: token,
          });
        })
        .catch(function (error) {
          var errorMessage = error.message;
          reject({
            type: "error",
            message: errorMessage,
          });
        });
    });
  },

  resetPassword: (email) => {
    return new Promise((resolve, reject) => {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject({
            type: "error",
            message: error.message,
          });
        });
    });
  },

  signOut: () => {
    return new Promise((resolve, reject) => {
      auth
        .signOut()
        .then(function () {
          // Sign-out successful.
          resolve({ isSignOut: true });
        })
        .catch(function (error) {
          // An error happened.
          reject(error);
        });
    });
  },
};

export default userAPI;
