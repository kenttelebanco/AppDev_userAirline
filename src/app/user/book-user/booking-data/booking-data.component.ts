import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { _MatTabBodyBase } from '@angular/material/tabs';
import { BookUser } from 'src/app/shared/book-user';
import { BookingUser } from 'src/app/shared/booking-user';
import { CrudService } from 'src/app/shared/crud.service';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { BookUserComponent } from '../book-user.component';

@Component({
  selector: 'app-booking-data',
  templateUrl: './booking-data.component.html',
  styleUrls: ['./booking-data.component.css']
})
export class BookingDataComponent implements OnInit, OnChanges {
  @Output() submitBooking = new EventEmitter<boolean>();
  @Output() onCancelFlight = new EventEmitter<boolean>();
  @Input() booking!: BookUser;
  @Input() bookinguser!: BookingUser;

  currentDate = new Date();
  

  submitForm!: FormGroup;

openAlertDialog() {
    const dialogRef = this.dialog.open(BookDialogComponent,{
      data:{
        message: 'Successfully Booked Your Flight!',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog, private crud: CrudService, private bu: BookUserComponent) {
  }
    
  
  ngOnInit(): void {
    this.submitForm = this.fb.group({
      $key: [this.booking.$key],
      destination: [this.booking.destination],
      origin: [this.booking.origin],
      fcode: [this.booking.fcode],
      fprice: [this.booking.fprice],
      airline: [this.booking.airline],
      dept: [this.booking.dept],
      arrival: [this.booking.arrival],
      date: [this.booking.date],
      bookeddate: [this.booking.bookeddate],
      status: [this.booking.status],
      ftype: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.submitForm = this.fb.group({
      $key: [this.booking.$key],
      destination: [this.booking.destination],
      origin: [this.booking.origin],
      fcode: [this.booking.fcode],
      fprice: [this.booking.fprice],
      airline: [this.booking.airline],
      dept: [this.booking.dept],
      arrival: [this.booking.arrival],
      date: [this.booking.date],
      bookeddate: [this.booking.bookeddate],
      status: [this.booking.status],
      ftype: ['', Validators.required],
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
      bookeddate: this.currentDate.toString(),
    };
    this.crud.addBookingUser(payload);
    this.crud.submitBookings(this.booking.$key, payload);
    }

  get f() {
    return this.submitForm.controls;
  }
  submit(){
    console.log(this.submitForm.value);
  }

  onCancel(){
    this.bu.onCancelFlight(false);
  }

  changeType(e: any) {
    console.log(e.target.value);
  }
}
