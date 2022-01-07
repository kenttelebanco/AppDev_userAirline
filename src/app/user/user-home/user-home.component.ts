import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SigninService } from 'src/app/shared/signin.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  isSignedIn = false
  constructor(public firebaseService: SigninService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
}
