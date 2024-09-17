import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpzZHQ5R-fjc3Y8eH2rakvvRNRyYRWu6c",
  authDomain: "startup-a54cf.firebaseapp.com",
  projectId: "startup-a54cf",
  storageBucket: "startup-a54cf.appspot.com",
  messagingSenderId: "876440760888",
  appId: "1:876440760888:web:7eabbfdf0b9ab0c0e8accd",
  measurementId: "G-TS4ZN2DBB0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Remove this if you're trying to use real phone numbers in a production environment
if (window.location.hostname === "localhost") {
  // auth.settings.appVerificationDisabledForTesting = true;
}

const setUpRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible", // Invisible for better UX
        callback: (response) => {
          console.log("ReCAPTCHA verified successfully.", response);
        },
        "expired-callback": () => {
          console.log("ReCAPTCHA expired. Please try again.");
        },
      },
      auth
    );

    // Ensure ReCAPTCHA is rendered
    window.recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });
  }
};

export { auth, setUpRecaptcha };

// // Import the necessary functions from Firebase SDK
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth"; // Firebase authentication imports
// import { getAnalytics } from "firebase/analytics"; // Optional if you are using analytics

// // Firebase configuration (replace with your own values from Firebase Console)
// const firebaseConfig = {
//   apiKey: "AIzaSyCpzZHQ5R-fjc3Y8eH2rakvvRNRyYRWu6c",
//   authDomain: "startup-a54cf.firebaseapp.com",
//   projectId: "startup-a54cf",
//   storageBucket: "startup-a54cf.appspot.com",
//   messagingSenderId: "876440760888",
//   appId: "1:876440760888:web:7eabbfdf0b9ab0c0e8accd",
//   measurementId: "G-TS4ZN2DBB0",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Optional: Initialize analytics if needed
// const analytics = getAnalytics(app);

// // Initialize Firebase Authentication
// const auth = getAuth(app);

// // Check if running in localhost to disable app verification for local testing
// if (window.location.hostname === "localhost") {
//   auth.settings.appVerificationDisabledForTesting = true; // Disable ReCAPTCHA for localhost
// }

// // Set up ReCAPTCHA
// const setUpRecaptcha = () => {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container", // This must match the ID in your HTML for ReCAPTCHA
//       {
//         size: "invisible", // Invisible reCAPTCHA for better UX
//         callback: (response) => {
//           console.log("ReCAPTCHA solved:", response);
//         },
//         "expired-callback": () => {
//           console.log("ReCAPTCHA expired. Please try again.");
//         },
//       },
//       auth // Pass the auth instance
//     );

//     // Render reCAPTCHA once
//     window.recaptchaVerifier.render().then((widgetId) => {
//       window.recaptchaWidgetId = widgetId;
//     });
//   }
// };

// // Export the authentication instance and ReCAPTCHA setup
// export { auth, setUpRecaptcha, signInWithPhoneNumber };
