import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA0_370YddYBBT9HA1DS0EbwyT3npHE6BI",
  authDomain: "741116047859-ip1605lkg94lh3ve03m3o3jafjla8tsf.apps.googleusercontent.com",
  projectId: "scholarshipfinder-fb492",
  storageBucket: "scholarshipfinder-fb492.appspot.com",
  messagingSenderId: "741116047859",
  appId: "1:741116047859:android:7e8497faafa56215afe286",
  firebase_url: "https://scholarshipfinder-fb492-default-rtdb.firebaseio.com",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)