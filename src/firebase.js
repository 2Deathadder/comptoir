import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Configuration Firebase réelle fournie
const firebaseConfig = {
  apiKey: 'AIzaSyBw_W-PlWx_qZskdXd483Xvg83m_X815Ec',
  authDomain: 'comptoir-81d18.firebaseapp.com',
  projectId: 'comptoir-81d18',
  storageBucket: 'comptoir-81d18.firebasestorage.app',
  messagingSenderId: '365687115414',
  appId: '1:365687115414:web:3a599f5a365acacca03cb7'
}

// Détecte si la configuration a été remplacée (compatibilité avec l'ancien placeholder)
const configured = firebaseConfig.apiKey && firebaseConfig.apiKey !== 'À_REMPLACER'
export const firebaseApp = configured ? initializeApp(firebaseConfig) : null
export const db = firebaseApp ? getFirestore(firebaseApp) : null
export { configured }
