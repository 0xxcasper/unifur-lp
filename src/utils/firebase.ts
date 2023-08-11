// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, Firestore } from 'firebase/firestore';

const setupFirebase = (): Firestore => {
  try {
    const firebaseConfig = {
      apiKey: 'AIzaSyBgYp34tsrAVDqMDCWLgtJtjxJQDjhrRqI',
      authDomain: 'unifur-lp-e6825.firebaseapp.com',
      projectId: 'unifur-lp-e6825',
      storageBucket: 'unifur-lp-e6825.appspot.com',
      messagingSenderId: '837506701718',
      appId: '1:837506701718:web:b5d7d50ebe439dbc0ce5b7',
      measurementId: 'G-HKQST6ECSR',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getFirestore(app);
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};

const getUserCollection = () => {
  const db = setupFirebase();
  return collection(db, 'users');
};

export interface IFormValues {
  productName: string;
  width: string;
  deep: string;
  height: string;
  color: string;
  colorImage: string;
  number: string;
  description: string;
  imageLink: string;

  userName: string;
  phoneNumber: string;
  email: string;
  facebook: string;
}

const addData = async (data: IFormValues) => {
  const user = getUserCollection();
  await addDoc(user, {
    ...data,
  });
};

export { setupFirebase, addData };
