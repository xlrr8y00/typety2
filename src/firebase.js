// Importa funções do SDK
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getAnalytics, isSupported } from "firebase/analytics"

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "00000000000000000",
  authDomain: "000000000000000000",
  projectId: "000000000000",
  storageBucket: "00000000000000000",
  messagingSenderId: "00000000000000",
  appId: "00000000000000",
  measurementId: "000000000000"
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
