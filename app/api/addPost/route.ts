// app/api/addPost/route.ts
import { db } from '@/firebase/firebase-admin';
import admin from 'firebase-admin';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    // Menambahkan data ke Firestore
    const docRef = await db.collection('posts').add({
      title,
      content,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
