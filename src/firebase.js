// Importa funções do SDK
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxg_d2L0LM-xdI8iMpn3M2wkfoQfF8Skg",
  authDomain: "boobiegoods-65eea.firebaseapp.com",
  projectId: "boobiegoods-65eea",
  storageBucket: "boobiegoods-65eea.firebasestorage.app",
  messagingSenderId: "378954928356",
  appId: "1:378954928356:web:3b25722ad633e905239cf1",
  measurementId: "G-FC4GJ8EF6D"
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

