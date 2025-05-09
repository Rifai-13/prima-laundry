import admin from 'firebase-admin';
import dotenv from 'dotenv';

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Menyusun kredensial menggunakan variabel lingkungan
const serviceAccount: admin.ServiceAccount = {
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

// Inisialisasi Firebase Admin SDK jika belum ada aplikasi Firebase yang aktif
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Menyambung ke Firestore
const db = admin.firestore();

export { db };
