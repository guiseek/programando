import * as admin from 'firebase-admin';
import { analytics, config, firestore } from 'firebase-functions';
admin.initializeApp();

const db = admin.firestore();
const msg = admin.messaging();

export { db, msg, firestore, analytics, config };

