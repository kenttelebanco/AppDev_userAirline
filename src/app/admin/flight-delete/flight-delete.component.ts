import { Component, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CrudService } from '../../shared/crud.service';


@Component({
  selector: 'app-flight-delete',
  templateUrl: './flight-delete.component.html',
  styleUrls: ['./flight-delete.component.css']
})
export class FlightDeleteComponent implements OnInit {
  form = this.fb.group({
    $key: [''],
    destination: ['', Validators.required],
    origin: ['', Validators.required],
  });

  bookusers$: any[]= [];
  editing = false;
  editingIndex!: number;

  constructor(private fb: FormBuilder, private crud: CrudService) {}
  
  ngOnInit(): void {
    this.crud.getBookUser().subscribe((val) => {
      this.bookusers$ = val
    });
  }

  onEdit(index: any) {
    this.editing = true;
    this.editingIndex = index;
  }

  editComplete(value: any) {
    this.editing = value;
    this.editingIndex = 0;
  }

  onCancelFlight(value: any) {
    this.editing = value;
  }

  get f() {
    return this.form.controls;
  }
}

