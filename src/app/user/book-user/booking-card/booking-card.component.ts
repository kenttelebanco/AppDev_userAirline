import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookUser } from 'src/app/shared/book-user';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {
  @Input() bookusers$: any;
  @Input() booking!: BookUser;
  @Output() selectedUser = new EventEmitter<number>();

  public $statuscard = true;
  
  constructor() { 

  }

  ngOnInit(): void {
  }

  onClick(i: number) {
    this.selectedUser.emit(i);
  }
}
