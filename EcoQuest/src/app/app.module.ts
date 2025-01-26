import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp({ projectId: "ecoquest-97df5", appId: "1:441011459321:web:06c967fdc599b9f2003e28", storageBucket: "ecoquest-97df5.firebasestorage.app", apiKey: "AIzaSyCiaQGwRql8lntN5smYbKPQ0H-hTIwvzEA", authDomain: "ecoquest-97df5.firebaseapp.com", messagingSenderId: "441011459321", measurementId: "G-5V50LXYN91" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
