import { Injectable } from '@angular/core';
import { BookUser } from '../shared/book-user';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { BookingUser } from './booking-user';
import { BookingStatus} from './booking-status';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private bookusersCollection: AngularFirestoreCollection<BookUser>;
  private bookingusersCollection: AngularFirestoreCollection<BookingUser>;
  private bookingstatusCollection: AngularFirestoreCollection<BookingStatus>;

  userbooks$!: Observable<BookUser[]>;
  userbookings$!: Observable<BookingUser[]>;
  statusbookings$!: Observable<BookingStatus[]>;


  constructor(private afs: AngularFirestore) {
    this.bookusersCollection = this.afs.collection<BookUser>('bookusers');
    this.bookingusersCollection = this.afs.collection<BookingUser>('bookingusers');
    this.bookingstatusCollection = this.afs.collection<BookingStatus>('bookingstatus');


    this.userbooks$ = this.bookusersCollection.valueChanges();
    this.userbookings$ = this.bookingusersCollection.valueChanges();
    this.statusbookings$ = this.bookingstatusCollection.valueChanges();


  }

  addBookUser(userbooks: BookUser) {
    const pushkey = this.afs.createId();
    userbooks.$key = pushkey;
    this.bookusersCollection.doc(pushkey).set(userbooks);
  }

  addBookingUser(userbookings: BookingUser) {
    const pushkey = this.afs.createId();
    userbookings.$key = pushkey;
    this.bookingusersCollection.doc(pushkey).set(userbookings);
  }

  addBookingStatus(statusbookings: BookingStatus) {
    const pushkey = this.afs.createId();
    statusbookings.$key = pushkey;
    this.bookingstatusCollection.doc(pushkey).set(statusbookings);
  }

  getBookUser() {
    return this.userbooks$;
  }

  getBookingUser() {
    return this.userbookings$;
  }

  getBookingStatus() {
    return this.statusbookings$;
  }

  removeStudent($key: string) {
    this.bookingusersCollection.doc($key).delete();
  }

  submitBookings(bookingId: string, bookingChanges: BookUser) {
    this.bookusersCollection.doc(bookingId).update(bookingChanges);
  }

  submitBookingsStatus(bookingId: string, bookingChanges: BookingStatus) {
    this.bookingstatusCollection.doc(bookingId).update(bookingChanges);
  }
}
