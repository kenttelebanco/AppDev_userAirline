import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-userbooking-card',
  templateUrl: './userbooking-card.component.html',
  styleUrls: ['./userbooking-card.component.css']
})
export class UserbookingCardComponent implements OnInit {
  @Input() userkey!: string;  
  @Input() bookingusers$: any;
  @Input() pastbooking!: true;
  @Output() deleted!: boolean;
  @Output() selectedBooking = new EventEmitter<number>();
  
  constructor(private crud: CrudService) { }

  ngOnInit(): void {
  }

  onClick(i: number) {
    this.selectedBooking.emit(i);
  }

  onDelete($key: any) {
    this.crud.removeStudent($key);
  }

  onReuseDelete() {
    this.crud.removeStudent(this.userkey);
  }
}
