import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookUser } from 'src/app/shared/book-user';
import { BookingUser } from 'src/app/shared/booking-user';
import { CrudService } from 'src/app/shared/crud.service';
import { BookUserComponent } from 'src/app/user/book-user/book-user.component';
import { FlightDialogComponent } from './flight-dialog/flight-dialog.component';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.css']
})
export class FlightAddComponent implements OnInit {

  @Output() submitBooking = new EventEmitter<boolean>();
  @Input() booking!: BookUser;
  submitForm!: FormGroup;
  today: number = Date.now();

  openAlertDialog() {
    const dialogRef = this.dialog.open(FlightDialogComponent,{
      data:{
        message: 'Successfully Created A Flight!',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog, private crud: CrudService, private bu: BookUserComponent,private afs: AngularFirestore) { 
    setInterval(() => {this.today = Date.now()}, 1);
  }
  ngOnInit(): void {
    this.submitForm = this.fb.group({
      $key: ['', Validators.required],
      destination: ['', Validators.required],
      origin: ['', Validators.required],
      fcode: ['', Validators.required],
      fprice: ['', Validators.required],
      airline: ['', Validators.required],
      dept: ['', Validators.required],
      arrival: ['', Validators.required],
      date: ['', Validators.required],
      ftype: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit() {
    const payload: BookingUser = {
      $key: this.f.$key.value,
      destination: this.f.destination.value,
      origin: this.f.origin.value,
      fcode: this.f.fcode.value,
      fprice: this.f.fprice.value,
      airline: this.f.airline.value,
      type: this.f.ftype.value,
      dept: this.f.dept.value,
      arrival: this.f.arrival.value,
      date: this.f.date.value,
      status: this.f.status.value,
      bookeddate: ''
    };

    this.crud.addBookUser(payload);
    this.submitForm.reset();

  }

  get f() {
    return this.submitForm.controls;
  }

}
