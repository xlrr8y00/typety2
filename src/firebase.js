// Importa funções do SDK
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

// Configuração do Firebase
const firebaseConfig = {
   apiKey: "AIzaSyA75hLtzSAgIKlHr5wYUrGVzdtVRBjyQFA",
  authDomain: "mago7-edd5d.firebaseapp.com",
  projectId: "mago7-edd5d",
  storageBucket: "mago7-edd5d.firebasestorage.app",
  messagingSenderId: "11771477084",
  appId: "1:11771477084:web:1b5ecff4a67cfbb6767a99",
  measurementId: "G-7NT27NZ6LF"
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

// Analytics só no navegador
let analytics = null

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) analytics = getAnalytics(app)
  }).catch(() => {})
}

export { app, db, auth, storage, analytics }


