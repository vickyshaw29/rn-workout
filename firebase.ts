// firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCKlMtQz40pAXrTmm3fV2if3kOFSupKntM",
  authDomain: "rn-workout-e3289.firebaseapp.com",
  projectId: "rn-workout-e3289",
  storageBucket: "rn-workout-e3289.firebasestorage.app",
  messagingSenderId: "1094538868759",
  appId: "1:1094538868759:web:e14ad5d18a025cd2b4c452",
  measurementId: "G-MP4HV5WNDN"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)
