import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {
  form = this.fb.group({
    $key: [''],
    destination: ['', Validators.required],
    origin: ['', Validators.required],
  });

  bookingusers$: any[]= [];

  constructor(private fb: FormBuilder, private crud: CrudService) {}
  
  ngOnInit(): void {
    this.crud.getBookingUser().subscribe((val) => {
      this.bookingusers$ = val
    });
  }

  get f() {
    return this.form.controls;
  }
}
