import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-book-user',
  templateUrl: './book-user.component.html',
  styleUrls: ['./book-user.component.css']
})
export class BookUserComponent implements OnInit {
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
