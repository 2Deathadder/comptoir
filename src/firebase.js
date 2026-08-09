import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// À REMPLACER - crée un projet gratuit sur https://console.firebase.google.com
const firebaseConfig = {
  apiKey: 'À_REMPLACER',
  authDomain: 'À_REMPLACER.firebaseapp.com',
  projectId: 'À_REMPLACER',
  storageBucket: 'À_REMPLACER.appspot.com',
  messagingSenderId: 'À_REMPLACER',
  appId: 'À_REMPLACER'
}
const configured = firebaseConfig.apiKey !== 'À_REMPLACER'
export const firebaseApp = configured ? initializeApp(firebaseConfig) : null
export const db = firebaseApp ? getFirestore(firebaseApp) : null
export const auth = firebaseApp ? getAuth(firebaseApp) : null
export { configured }
