import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../firebase-config'; // Adjust the path as necessary

@Component({
  selector: 'app-firebase-auth',
  standalone: false,
  
  templateUrl: './firebase-auth.component.html',
  styleUrl: './firebase-auth.component.scss'
})
export class FirebaseAuthComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User signed in: ', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in: ', errorCode, errorMessage);
      });
  }
}
