import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';

import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SigninService } from './shared/signin.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { ReactiveFormsModule } from '@angular/forms';
import { BookUserComponent } from './user/book-user/book-user.component';
import { FlightDataComponent } from './admin/flight-delete/flight-data/flight-data.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [AngularFirestore, SigninService, BookUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
