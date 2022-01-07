import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _MatTabBodyBase } from '@angular/material/tabs';
import { BookUser } from 'src/app/shared/book-user';
import { BookingStatus } from 'src/app/shared/booking-status';
import { CrudService } from 'src/app/shared/crud.service';
import { FlightDeleteComponent } from '../flight-delete.component';

@Component({
  selector: 'app-flight-data',
  templateUrl: './flight-data.component.html',
  styleUrls: ['./flight-data.component.css']
})
export class FlightDataComponent implements OnInit {

  @Output() submitBooking = new EventEmitter<boolean>();
  @Output() onCancelFlight = new EventEmitter<boolean>();
  @Input() booking!: BookUser;
  @Input() bookingstatus!: BookingStatus;
  

  submitForm!: FormGroup;

  constructor(private fb: FormBuilder, private crud: CrudService, private bu: FlightDeleteComponent) {
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
      status: ['', Validators.required],
      ftype: [this.booking.type],
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
      status: ['', Validators.required],
      ftype: [this.booking.type],
    });
  }

  onSubmit() {
    const payload: BookingStatus = {
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
      bookeddate: this.f.bookeddate.value,
    };
    this.crud.submitBookingsStatus(this.booking.$key, payload);
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
