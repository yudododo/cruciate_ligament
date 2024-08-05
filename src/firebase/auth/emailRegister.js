import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../index'; 

const auth = getAuth(app);

export default async function emailRegister(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken();
    return token;
  } catch (error) {
    console.error("Error registering with email and password", error);
    throw error;
  }
}
