// firebase/firebase-admin.ts
import admin from 'firebase-admin';

// Mengimpor file private key
const serviceAccount = require('./serviceAccountKey.json');

// Inisialisasi Firebase Admin SDK jika belum ada aplikasi Firebase yang aktif
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Menyambung ke Firestore
const db = admin.firestore();

export { db };
