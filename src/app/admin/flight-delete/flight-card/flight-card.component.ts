import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookUser } from 'src/app/shared/book-user';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

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
