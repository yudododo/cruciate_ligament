import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '..';

const auth = getAuth(app);

//get firebase token from email and password
export default async function emailLogin(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  return await user.getIdToken();
}
