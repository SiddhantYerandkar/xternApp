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
