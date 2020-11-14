import { auth,db } from "services/firebaseConfig";
import firebase from "firebase";

const userAPI = {
  signInWithEmail: (email, password) => {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          const user = res.user;
          if (user.emailVerified) {
            db.ref('/users/' + user.uid).once('value').then(function(snapshot) {
              var firstName = (snapshot.val() && snapshot.val().firstName) || 'Anonymous';
              var lastName = (snapshot.val() && snapshot.val().lastName) || 'Anonymous';
              var picture = (snapshot.val() && snapshot.val().picture) || 'Anonymous';
              var email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
              user.getIdToken().then((token) => {
                resolve({
                  uid: user.uid,
                  firstName:firstName,
                  lastName:lastName,
                  picture : picture,
                  email: email,
                  token: token,
                });
              });
            }).catch((error)=>{
              console.log(error);
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

  signUpWithEmail: (email, password, firstName,lastName) => {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          const user = res.user;
          user.sendEmailVerification();
          db.ref('users/' + user.uid).set({
            firstName:firstName,
            lastName:lastName,
            picture : user.photoURL!==null?user.photoURL:'',
            email: email,
          }).catch((error)=>{
            console.log(error);
          });;
          resolve({
            isSuccess: true,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  signInWithGoogle: () => {
    return new Promise((resolve, reject) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ){
        auth.signInWithRedirect(provider);
        auth.getRedirectResult().then(function(result) {
          const user = result.user;
          const {email,family_name,given_name,picture} = result.additionalUserInfo.profile;
          const isNewUser = result.additionalUserInfo.isNewUser;
          console.log(result.additionalUserInfo.profile);
            if(isNewUser){
              db.ref('users/' + user.uid).set({
                firstName:family_name,
                lastName:given_name,
                picture : picture,
                email: email,
              }).catch((error)=>{
                console.log(error);
              });;
            }
            user.getIdToken().then((token)=>{
              resolve({
                uid: user.uid,
                firstName:family_name,
                lastName:given_name,
                picture : picture,
                email: email,
                token: token,
              })
            })
          
        }).catch(function(error) {
          // Handle Errors here.
          var errorMessage = error.message;
          // The email of the user's account used.
          reject({
            type: "error",
            message: errorMessage,
          });
        });
      }else{                    //desktop
        auth
        .signInWithPopup(provider)
        .then(function (result) {
          // The signed-in user info.
          const user = result.user;
          const {email,family_name,given_name,picture} = result.additionalUserInfo.profile;
          const isNewUser = result.additionalUserInfo.isNewUser;

          if(isNewUser){
              db.ref('users/' + user.uid).set({
                firstName:family_name,
                lastName:given_name,
                picture : picture,
                email: email,
              }).catch((error)=>{
                console.log(error);
              });
            }
            user.getIdToken().then((token)=>{
              resolve({
                uid: user.uid,
                firstName:family_name,
                lastName:given_name,
                picture : picture,
                email: email,
                token: token,
              })
            }).catch((error)=>{
              console.log(error);
            })
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
    }
  });
  },

  signInWithFacebook: () => {
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        //mobile
        auth.signInWithRedirect(provider);
        auth
          .getRedirectResult()
          .then(function (result) {
            var user = result.user;
            const isNewUser = result.additionalUserInfo.isNewUser;
            const {first_name,last_name,email,picture}=result.additionalUserInfo.profile;
            if(isNewUser){
              db.ref('users/' + user.uid).set({
                firstName:first_name,
                lastName:last_name,
                picture : picture.data.url,
                email: email!==null?email:'',
              }).catch((error)=>{
                console.log(error);
              });
            }
            user.getIdToken().then((token)=>{
              resolve({
                uid: user.uid,
                firstName:first_name,
                lastName:last_name,
                picture : picture.data.url,
                email: email,
                token: token,
              })
            })
          })
          .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            reject({
              type: "error",
              message: errorMessage,
            });
          });
      } else {
        //desktop
        auth
          .signInWithPopup(provider)
          .then(function (result) {
            const isNewUser = result.additionalUserInfo.isNewUser;
            const {first_name,last_name,email,picture}=result.additionalUserInfo.profile;
            var user = result.user;
            if(isNewUser){
              db.ref('users/' + user.uid).set({
                firstName:first_name,
                lastName:last_name,
                picture : picture.data.url,
                email: email!==null?email:'',
              }).catch((error)=>{
                console.log(error);
              });;
            }
            user.getIdToken().then((token)=>{
              resolve({
                uid: user.uid,
                firstName:first_name,
                lastName:last_name,
                picture : picture.data.url,
                email: email,
                token: token,
              })
            })
          })
          .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
            reject({
              type: "error",
              message: errorMessage,
            });
          });
      }
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

  // firebase.auth().onIdTokenChanged(function(user) {
  //   if (user) {
  //     // User is signed in or token was refreshed.
  //   }
  // });

  verifyCurrentUser:()=>{
    return new Promise((resolve, reject)=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          user.getIdToken().then((value)=>{
            resolve({
              token:value,
              uid:user.uid,
            })
          })
        }else{
          reject({
            token:null,
            uid:null,
          })
        }
      })
    })
  },

  getUserInfor:(uid)=>{
    return new Promise((resolve,reject)=>{
      db.ref('/users/' + uid).once('value').then(function(snapshot) {
        var firstName = (snapshot.val() && snapshot.val().firstName) || 'Anonymous';
        var lastName = (snapshot.val() && snapshot.val().lastName) || 'Anonymous';
        var picture = (snapshot.val() && snapshot.val().picture) || 'Anonymous';
        var email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
          resolve({
            uid: uid,
            firstName:firstName,
            lastName:lastName,
            picture : picture,
            email: email,
          });
      }).catch((error)=>{
        console.log(error);
      });
    })
  },

  getAllUser:()=>{
    return new Promise((resolve,reject)=>{
      db.ref('/users/').once('value').then((snapshot)=>{
        const users = snapshot.val();
        resolve(users);
      }).catch((error)=>{
        reject(error)
      })
    });
  },

  sendFriendRequest:(fromId,toId)=>{
    return new Promise((resolve,reject)=>{
      db.ref('users/' + fromId + '/friendRequests/' + 'toUsers/' + toId).set(true).then(()=>resolve(true)).catch((error)=>{
        reject(error);
        console.log(error);
      });

      db.ref('users/' + toId + '/friendRequests/' + 'fromUsers/'+ fromId).set(true).then(()=>resolve(true)).catch((error)=>{
        reject(error);
        console.log(error);
      });
    })
  },

  receiveFriendRequestListener:(uid,handleFunc)=>{//lang nghe nguoi khac gui loi moi ket ban
    return db.ref('users/'+ uid + '/friendRequests/' + 'fromUsers').on('value',handleFunc);
  },

  sendFriendRequestListener:(uid,handleFunction)=>{//lang nghe nguoi khac chap nhan loi moi
    return db.ref('users/').on('value',handleFunction);
  }
}


  
export default userAPI;
